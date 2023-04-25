import React, {useState} from 'react';
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';


function Expenses(props){
  const [filter, setFilter] = useState(2020)

  const ononFilterSelectedHandler = (value)=>{
    setFilter(value)
    console.log(filter);
  }
   return <div>
   <Card className='expenses'>
   <ExpensesFilter yearSelected={filter} onFilterSelected={ononFilterSelectedHandler}/>
     <ul >
          {props.items.map((item)=><li>
{           <ExpenseItem 
           date = {item.date}
           title = {item.title}
           amount = {item.amount}></ExpenseItem> }
           </li>)}
    </ul> 
    </Card>
    </div>
}

export default Expenses ;