import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";


function Expenses(props){
   return <Card className='expenses'>
     <ul >
          {props.items.map((item)=><li>
{           <ExpenseItem 
           date = {item.date}
           title = {item.title}
           amount = {item.amount}></ExpenseItem> }
           </li>)}
    </ul> 
    </Card>
}

export default Expenses ;