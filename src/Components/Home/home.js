import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Home.module.css'
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { Button } from 'react-bootstrap';

function Home (){
    const [expenses,setexpenses]= useState(null)
    const [showform,setshowform]= useState(false)

    const AddExpense = ()=>{
        setshowform(true)
    }

    const hideFormHandler = () => {
        setshowform(false);
    }
    useEffect(() => {
        document.body.style.backgroundImage = 'none'; 
        const fetchdata = async()=>{
            const response = await fetch('https://react-api-test-d5c70-default-rtdb.firebaseio.com/Expense.json')
            const responsedata = await response.json()
            setexpenses(Object.values(responsedata))
        }
        fetchdata()
        return () => {
           
            document.body.style.backgroundImage = 'radial-gradient( circle 382px at 50% 50.2%,  rgba(73,76,212,1) 0.1%, rgba(3,1,50,1) 100.2% )';
        };
    }, []);

return <div>
    <h2>Welcome To Expense Page</h2>
    <p>Your profile is incomplete <Link to='/profile'>Complete</Link></p>
    <Button onClick={AddExpense}>Add Expense</Button>
    {showform && <ExpenseForm  show={showform} hideform={hideFormHandler} />}
    {expenses ? (<ul>{expenses.map(expense=>{
return <li>{expense.Amount} -- {expense.Catagory} -- {expense.Description}</li>
    })} </ul>) : ''}

</div>

}

export default Home