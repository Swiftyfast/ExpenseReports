import React from 'react';
import '../index.css';

const ExpensesTransportation = (props) =>{
    const propsArray = props.expenseArray;
    let x = 0;
    let transportObj = {
        "Transportation - Gas, oil, maintenance": [0,0,0,0,0,0,0,0],
        "Transportation - Parking and tolls": [0,0,0,0,0,0,0,0],
        "Transportation - Auto Rental": [0,0,0,0,0,0,0,0],
        "Transportation - Taxi or Limo": [0,0,0,0,0,0,0,0],
        "Transportation - Other": [0,0,0,0,0,0,0,0]
    };
    while (x < propsArray.length){
        if (propsArray[x].grouping === 'Transportation'){
             //     //Take out the amount
        let y = Number(propsArray[x].amount);
        //     //Find out the day
            let z = propsArray[x].dayNumberValue;
        //     //add the amount to the day in the total array
            let abc = propsArray[x].description;
            transportObj[abc][z] = transportObj[abc][z] + y;
            transportObj[abc][7] = transportObj[abc][7] + y;
        }
        x++;
    }

    return (
        <div style={{display: "block",overflowX: "scroll"}} >
            <table className="ui single line celled unstackable bottom attached table" >
                <thead>
                <tr>
                    <th>Transporation</th>
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
                    <td>Gas, oil, maintenance</td>
                    {transportObj["Transportation - Gas, oil, maintenance"].map((item, i) => <td>{item}</td>)}
                    </tr>
                    <tr>
                    <td>Parking and tolls</td>
                    {transportObj["Transportation - Parking and tolls"].map((item, i) => <td>{item}</td>)}
                    </tr>
                    <tr>
                    <td>Auto Rental</td>
                    {transportObj["Transportation - Auto Rental"].map((item, i) => <td>{item}</td>)}
                    </tr>
                    <tr>
                    <td>Taxi or Limo</td>
                    {transportObj["Transportation - Taxi or Limo"].map((item, i) => <td>{item}</td>)}
                    </tr>
                    <tr>
                    <td>Transportation - Other</td>
                    {transportObj["Transportation - Other"].map((item, i) => <td>{item}</td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default ExpensesTransportation;