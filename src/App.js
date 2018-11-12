import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SelectYear from './components/selectYear';
import AmountCard from './components/amountCard';
import LnByCrdt from './components/lnByCrdt';
import LnVlm from './components/lnVlm';

const APIURL = 'http://ec2-52-15-32-193.us-east-2.compute.amazonaws.com:3000/';

class App extends Component {
    constructor() {
        super();
        const that = this;
        this.state = {};
        this.state.year = 2007;
        this.state.lnByCrdt = [];
        this.state.lnVlm = [];
        this.state.getReport = (year) => {
            Promise.all([axios.get(APIURL + 'totalamount/' + year),axios.get(APIURL + 'loansbycreditgrade/' + year),axios.get(APIURL + 'monthlyloanvolume/' + year)]).then((res) => {
                that.setState({
                    apldAmnt: res[0].data.loan_amnt,
                    fundedAmnt: res[0].data.funded_amnt,
                    CmtdAmnt: res[0].data.funded_amnt_inv,
                    lnByCrdt: res[1].data,
                    lnVlm: res[2].data,
                    year: year
                });
            });
        };
    }

    componentDidMount(){
        this.state.getReport(this.state.year);
    }

    render() {
        return (
            <div>
                <div className="header"><SelectYear getReport={this.state.getReport} /></div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <AmountCard title="Total Amount Applied For" amount={this.state.apldAmnt}/>
                        </div>
                        <div className="col">
                            <AmountCard title="Total Amount Funded" amount={this.state.fundedAmnt}/>
                        </div>
                        <div className="col">
                            <AmountCard title="Total Committed by investors" amount={this.state.CmtdAmnt}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <LnByCrdt  lnByCrdt={this.state.lnByCrdt}/>
                        </div>
                        <div className="col">
                            <LnVlm lnVlm={this.state.lnVlm}/>
                        </div>
                    </div>
                </div>
          </div>
      );
    }
}

export default App;
