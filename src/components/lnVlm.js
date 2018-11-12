import React, { Component } from 'react';
import Highcharts from 'highcharts';

class LnVlm extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
    componentWillReceiveProps(props){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const volume = [{
            name: "volume",
            colorByPoint: true,
            data: props.lnVlm.map(({issue_d, volume}) => {
                return {
                    name: issue_d,
                    y: volume
                }
            })
        }];
        Highcharts.chart('chartContainer2', {
            chart: {
                type: 'column'
            },

            title: {
                text: 'Lending Club - Monthly Loan Volume'
            },

            xAxis: {
                categories: months,
                type: 'category'
            },

            legend: {
                enabled: false
            },

            yAxis: {
                title: {
                    text: 'Loan Volume'
                }
            },

            series: volume

        });

    }
    render(){
        return(
            <div className="card shadow-lg bg-white p-1 m-4">
                <div className="card-body">
                    <h1 className="card-title">Monthly Loan Volume</h1>
                    <hr/>
                </div>
                <div id="chartContainer2"></div>
            </div>
        )
    }
}

export default LnVlm;