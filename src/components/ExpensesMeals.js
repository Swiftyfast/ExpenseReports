import React from 'react';

const ExpensesMeals = (props) =>{
    const propsArray = props.expenseArray;
    let x = 0;
    let mealsObj = {
        "Meals and Lodging - Hotel": [0,0,0,0,0,0,0,0],
        "Meals and Lodging - Breakfast": [0,0,0,0,0,0,0,0],
        "Meals and Lodging - Lunch": [0,0,0,0,0,0,0,0],
        "Meals and Lodging - Dinner": [0,0,0,0,0,0,0,0],
        "Meals and Lodging - Other": [0,0,0,0,0,0,0,0]
    };
    while (x < propsArray.length){
        if (propsArray[x].grouping === "Meals and Lodging"){
            //     //Take out the amount
        let y = Number(propsArray[x].amount);
        //     //Find out the day
            let z = propsArray[x].dayNumberValue;
        //     //add the amount to the day in the total array
            let abc = propsArray[x].description;
            mealsObj[abc][z] = mealsObj[abc][z] + y;
            mealsObj[abc][7] = mealsObj[abc][7] + y;
        }
        x++;
    }
    return(
        <div style={{display: "block", overflowX:"scroll"}}>
            <table className="ui single line celled unstackable bottom attached table" >
                <thead>
                <tr>
                    <th>Meals and Lodging</th>
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
                    <td>Hotel</td>
                    {mealsObj["Meals and Lodging - Hotel"].map((item, i) => <td>{item}</td>)}
                    </tr>
                    <tr>
                    <td>Breakfast</td>
                    {mealsObj["Meals and Lodging - Breakfast"].map((item, i) => <td>{item}</td>)}
                    </tr>
                    <tr>
                    <td>Lunch</td>
                    {mealsObj["Meals and Lodging - Lunch"].map((item, i) => <td>{item}</td>)}
                    </tr>
                    <tr>
                    <td>Dinner</td>
                    {mealsObj["Meals and Lodging - Dinner"].map((item, i) => <td>{item}</td>)}
                    </tr>
                    <tr>
                    <td>Other meals</td>
                    {mealsObj["Meals and Lodging - Other"].map((item, i) => <td>{item}</td>)}
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default ExpensesMeals;
