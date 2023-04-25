import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredItem, setEntredItem] = useState(
        {title: '',
        amount: 0,
        date: ''})
    const titleChangeHandler = (event) => {
        setEntredItem((prevStat)=>{return { ...prevStat , title:event.target.value}})
    };
    const amountChangeHandler = (event) => {
        setEntredItem((prevStat)=>{return { ...prevStat , amount:event.target.value}})
    };
    const dateChangeHandler = (event) => {
        setEntredItem((prevStat)=>{return { ...prevStat , date: event.target.value}})
    };
    const submitHandler = (event) => {
    event.preventDefault()
    props.onSaveExpenseData(enteredItem);
    setEntredItem({title: '',
    amount: 0,
    date: ''})};

    return (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__controls'>
                <label>Title</label>
                <input type='text' value={enteredItem.title} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__controls'>
                <label>Amount</label>
                <input type='number' value={enteredItem.amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__controls'>
                <label>Date</label>
                <input type='date' value={enteredItem.date} min="2020-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
        </div>
    </form>);
};

export default ExpenseForm;