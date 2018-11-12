import React, { Component } from 'react';

class AmountCard extends Component {
    constructor(props){
        super();
        this.state = {
            title: props.title || '',
            amount: props.amount
        }
    }
    componentWillReceiveProps(props){
        this.setState(props);
    }
    render(){
        return(
            <div className="card shadow-lg bg-white p-1 m-4">
                <div className="card-body">
                    <h4 className="card-title">{this.state.title}</h4>
                    <hr/>
                    <b style={{fontSize: '250%', color: 'navy'}} className="card-text ">{'$' + ('' + this.state.amount).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b>
                </div>
            </div>
        )
    }
}

export default AmountCard;