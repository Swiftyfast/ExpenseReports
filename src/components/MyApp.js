import React from 'react';
import Select from 'react-select';
import ItemizedExpenses from './ItemizedExpenses';
import ExpensesMeals from './ExpensesMeals';
import ExpensesTransportation from './ExpensesTransportation';
import ExpensesMiscellaneous from './ExpensesMiscellaneous';
import ExpensesTotal from './ExpensesTotal';

const daysOfTheWeek = [{ value: 'Sunday', label: 'Sunday', dayNumberValue: 0 },
    { value: 'Monday', label: 'Monday', dayNumberValue: 1 },
    { value: 'Tuesday', label: 'Tuesday', dayNumberValue: 2 },{ value: 'Wednesday', label: 'Wednesday', dayNumberValue: 3 },
    { value: 'Thursday', label: 'Thursday', dayNumberValue: 4 },
    { value: 'Friday', label: 'Friday', dayNumberValue: 5 }, {value: 'Saturday', label: 'Saturday', dayNumberValue: 6}];

const expenseTypes = [
    {value: 'Transportation - Gas, oil, maintenance', label: 'Transportation - Gas, oil, maintenance', group: 'Transportation'},
    {value: 'Transportation - Parking and tolls', label: 'Transportation - Parking and tolls', group: 'Transportation'},
    {value: 'Transportation - Auto Rental', label: 'Transportation - Auto Rental', group: 'Transportation'},
    {value: 'Transportation - Taxi or Limo', label: 'Transportation - Taxi or Limo', group: 'Transportation'},
    {value: 'Transportation - Other', label: 'Transportation - Other', group: 'Transportation'},
    {value: 'Meals and Lodging - Hotel', label: 'Meals and Lodging - Hotel', group: 'Meals and Lodging'},
    {value: 'Meals and Lodging - Breakfast', label: 'Meals and Lodging - Breakfast', group: 'Meals and Lodging'},
    {value: 'Meals and Lodging - Lunch', label: 'Meals and Lodging - Lunch', group: 'Meals and Lodging'},
    {value: 'Meals and Lodging - Dinner', label: 'Meals and Lodging - Dinner', group: 'Meals and Lodging'},
    {value: 'Meals and Lodging - Other', label: 'Meals and Lodging - Other', group: 'Meals and Lodging'},
    {value: 'Miscellaneous - Laundry, cleaning', label: 'Miscellaneous - Laundry, cleaning', group: 'Miscellaneous'},
    {value: 'Miscellaneous - Phone, fax, data', label: 'Miscellaneous - Phone, fax, data', group: 'Miscellaneous'},
    {value: 'Miscellaneous - Sundries', label: 'Miscellaneous - Sundries', group: 'Miscellaneous'},
    {value: 'Miscellaneous - Entertainment/Other', label: 'Miscellaneous - Entertainment/Other', group: 'Miscellaneous'}
];

class MyApp extends React.Component{
    constructor(props){
        super(props);
        this.state ={ 
            selectedOption: '',
            descriptionState: '',
            locationState: '',
            businessPurposeState: '',
            amountState: 0,
            itemizedPassingArray: [],
            transportArray: [],
            mealsArray: [],
            miscellaneousArray: []
        }

        this.onSubmitButton = this.onSubmitButton.bind(this);
    }
    
    onFormSubmit(event){
        event.preventDefault();
    }

    onDayChange = (selectedOption) => {
        this.setState({selectedOption});
    }

    onDescriptionChange = (descriptionState) =>{
        this.setState({descriptionState});
    }

    onSubmitButton (){
        let myArray = this.state.itemizedPassingArray
        myArray.push({
            grouping: this.state.descriptionState.group,
            day: this.state.selectedOption.label,
            dayNumberValue: this.state.selectedOption.dayNumberValue,
            description: this.state.descriptionState.label,
            location: this.state.locationState,
            businessPurpose: this.state.businessPurposeState,
            amount: this.state.amountState});
        this.setState({itemizedPassingArray: myArray});
        console.log(this.state.itemizedPassingArray);
    }

    render(){
        const { selectedOption } = this.state;
        const { descriptionState } = this.state;

        return (
            <div >
                <div>
                    <h1>Weekley Expense Report</h1>
                    <h3>Employee Information:</h3>
                    <p>Employee Name:</p><input type="text" id="employeeNameInput" />
                    <p>Employee Number:</p><input type="number" id="employeeNumberInput" />
                    <p>Week ending in:</p><input type="date" id="weekEndingInput" />
                    <h3>Expense Information:</h3>
                    <div>
                    <form onSubmit={this.onFormSubmit}>
                        <label>Date:</label>
                       <Select 
                            value = {selectedOption}
                            onChange={this.onDayChange}
                            options={daysOfTheWeek}/><br />
                        <label>
                        Description:
                        <Select
                            value ={descriptionState}
                            onChange={this.onDescriptionChange}
                            options={expenseTypes} />
                        </label><br />
                        <label>
                        Location:
                        <input
                            type="text"
                            value={this.state.locationState}
                            onChange={(e) => this.setState({locationState: e.target.value})} />
                        </label><br />
                        <label>
                        Business Purpose:
                        <input
                            type="text"
                            value={this.state.businessPurposeState}
                            onChange={(e) => this.setState({businessPurposeState: e.target.value})} />
                        </label><br />
                        <label>
                            Amount:
                            <input
                                type="number"
                                min="0"
                                step=".01"
                                value={this.state.amountState}
                                onChange={(e) => this.setState({amountState: e.target.value})} />
                        </label><br />
                        <button onClick={this.onSubmitButton}>Submit</button>
                    </form>
                    </div>               
                </div>
                <div >
                    <ExpensesTransportation expenseArray={this.state.itemizedPassingArray}/>< br/>
                    <ExpensesMeals expenseArray={this.state.itemizedPassingArray}/><br />
                    <ExpensesMiscellaneous expenseArray={this.state.itemizedPassingArray}/><br />
                    <ExpensesTotal expenseArray={this.state.itemizedPassingArray}/>
                </div>
                <div>
                    <ItemizedExpenses expenseArray={this.state.itemizedPassingArray}/>
                </div>
            </div>
        );
    } 
};

export default MyApp;