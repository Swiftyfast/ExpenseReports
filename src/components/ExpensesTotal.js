import React from 'react';

const ExpensesTotal = (props) =>{
    const propsArray = props.expenseArray;
    let x = 0;
    let totalArray = [0,0,0,0,0,0,0,0]
    while (x < propsArray.length){
        //Take out the amount
        let y = Number(propsArray[x].amount);
        //Find out the day
        let z = propsArray[x].dayNumberValue
        //add the amount to the day in the total array
        totalArray[z] = totalArray[z] + y;
        totalArray[7] = totalArray[7] + y;
        x++;
    }
    return (
        <div style={{display: "block", overflowX:"scroll"}}>
            <table className="ui single line celled unstackable bottom attached table" >
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Per Day Total</td>
                        <td>{totalArray[0]}</td>
                        <td>{totalArray[1]}</td>
                        <td>{totalArray[2]}</td>
                        <td>{totalArray[3]}</td>
                        <td>{totalArray[4]}</td>
                        <td>{totalArray[5]}</td>
                        <td>{totalArray[6]}</td>
                        <td>{totalArray[7]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ExpensesTotal;