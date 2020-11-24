import React from 'react';

const ItemizedExpenses = (props) => {
    const iEArray = props.expenseArray;

    if (props.expenseArray.length > 0){
        return (
            <div style={{display: "block", overflowX:"scroll"}}>
                <h1>Itemized expenses:</h1>
                <table className="ui single line celled unstackable bottom attached table" >
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Business Purpose</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {iEArray.map((item, i) => <tr key={i}>
                        <th>{item.day}</th>
                        <th>{item.description}</th>
                        <th>{item.location}</th>
                        <th>{item.businessPurpose}</th>
                        <th>{item.amount}</th>
                    </tr>)}
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
                </table>
            </div>
        );
    } else if (props.expenseArray.length === 0){
        return (
            <div style={{display: "block", overflowX:"scroll"}}>
                <h1>Itemized expenses:</h1>
                <table className="ui single line celled unstackable bottom attached table" >
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Business Purpose</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
                </table>
            </div>
        );
    }
};

export default ItemizedExpenses;
