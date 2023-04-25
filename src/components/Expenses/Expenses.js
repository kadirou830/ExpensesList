import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';


function Expenses(props){
  const ononFilterSelectedHandler = (value)=>{
    console.log(value);
  }
   return <div>
   <Card className='expenses'>
   <ExpensesFilter onFilterSelected={ononFilterSelectedHandler}/>
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