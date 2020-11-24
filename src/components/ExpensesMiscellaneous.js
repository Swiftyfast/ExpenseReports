import React from 'react';

const ExpensesMiscellaneous = (props) =>{
    const propsArray = props.expenseArray;
    let x = 0;
    let misObj = {
        "Miscellaneous - Laundry, cleaning": [0,0,0,0,0,0,0,0],
        "Miscellaneous - Phone, fax, data": [0,0,0,0,0,0,0,0],
        "Miscellaneous - Sundries": [0,0,0,0,0,0,0,0],
        "Miscellaneous - Entertainment/Other": [0,0,0,0,0,0,0,0]
    };
    while (x < propsArray.length){
        if (propsArray[x].grouping === "Miscellaneous"){
            //     //Take out the amount
        let y = Number(propsArray[x].amount);
        //     //Find out the day
            let z = propsArray[x].dayNumberValue;
        //     //add the amount to the day in the total array
            let abc = propsArray[x].description;
            misObj[abc][z] = misObj[abc][z] + y;
            misObj[abc][7] = misObj[abc][7] + y;
        }
        x++;
    }
    return(
        <div style={{display: "block", overflowX:"scroll"}}>
            <table className="ui single line celled unstackable bottom attached table" >
                <thead>
                <tr>
                    <th>Miscellaneous</th>
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
                    <td>Laundry, Cleaning</td>
                    {misObj["Miscellaneous - Laundry, cleaning"].map((item, i) => <td>{item}</td>)}
                    </tr>
                    <tr>
                    <td>Phone, fax, data</td>
                    {misObj["Miscellaneous - Phone, fax, data"].map((item, i) => <td>{item}</td>)}
                    </tr>
                    <tr>
                    <td>Sundries</td>
                    {misObj["Miscellaneous - Sundries"].map((item, i) => <td>{item}</td>)}
                    </tr>
                    <tr>
                    <td>Entertainment/Other</td>
                    {misObj["Miscellaneous - Entertainment/Other"].map((item, i) => <td>{item}</td>)}
                    </tr>
                </tbody>
            </table>
        </div>

    );

}

export default ExpensesMiscellaneous;