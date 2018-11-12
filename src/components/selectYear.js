import React, { Component } from 'react';
import './selectYear.css';

const SELECTYEAR = 'Select Year';

class Select_year extends Component {
    constructor(props){
        super();
        const that = this;
        this.state = {
            year: 2007,
            gntReport: function (year) {
                props.getReport(year);
                that.setState({year: year});
            }
        };
    }
    render(){
        const that = this;
        return (
            <div>
                <div className="btn-group select_year shadow-lg bg-white p-1 mb-3 mr-5">
                    <button style={{fontSize:'large'}} className="btn bg-white btn-lg select-btn"><b>{SELECTYEAR}</b></button>
                    <button style={{fontSize:'large'}} className="btn bg-white btn-lg dropdown-toggle dropdown-toggle-split" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <b>{this.state.year}</b>
                    </button>
                    <div className="dropdown-menu">
                        {
                            (function (years) {
                                const result = [];
                                for(var i = years[0]; i <= years[1]; i ++){
                                    const year = i;
                                    result.push(
                                        <a href="#" key={year} style={{fontSize:'large'}} className="dropdown-item" onClick={()=>that.setState({year:year})}>{year}</a>
                                    );
                                }
                                return result;
                            })([2007,2015])
                        }
                    </div>
                </div>
                <div style={{backgroundColor:'navy'}} className="btn-group shadow-lg p-1 mb-3">
                    <button onClick={()=>{that.state.gntReport(that.state.year)}} className="btn btn-lg generate-btn"><b>Generate Report</b></button>
                </div>
            </div>

        );
    }
}

export default Select_year;