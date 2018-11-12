import React, { Component } from 'react';
import Highcharts from 'highcharts';

class LnByCrdt extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
    componentWillReceiveProps(props){
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const series = props.lnByCrdt.map((log) => {
            return{
                name: log.grade,
                data: months.map((month) => {
                    return log.amnt[month] || 0;
                })
            };
        });
        Highcharts.chart('chartContainer1', {

            title: {
                text: 'Loans Issued by Credit Score (Grade)'
            },

            xAxis: {
                categories: months,
                title: {
                    text: 'Month'
                }
            },

            yAxis: {
                title: {
                    text: 'Avg. Loan Amount'
                }
            },

            series: series,

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });

    }
    render(){
        return(
            <div className="card shadow-lg bg-white p-1 m-4">
                <div className="card-body">
                    <h1 className="card-title">Loan By Credit Grade</h1>
                    <hr/>
                </div>
                <div id="chartContainer1"> </div>
            </div>
        )
    }
}

export default LnByCrdt;