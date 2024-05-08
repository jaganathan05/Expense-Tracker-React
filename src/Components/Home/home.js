import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Home.module.css'
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { Button,FormCheck } from 'react-bootstrap';
import ExpenseList from './ExpenseList';
import { useDispatch, useSelector} from 'react-redux';
import {Expenseactions} from '../../Store/Slices/Expense'
import { Themeactions } from '../../Store/Slices/Theme';

function Home (){ 
    const TotalAmount = useSelector(state => state.Expense.TotalAmount);
    const expenseSelector = useSelector(state => state.Expense.Expenses); 
    const premium = useSelector(state => state.Expense.premium);
    
    const dispatch = useDispatch()
    const [editobj,seteditobj]=useState(null)
    const [reload,setreload]=useState(false)
    const [expenses,setexpenses]= useState(null)
    const [showform,setshowform]= useState(false)

    
    const AddExpense = ()=>{
        setshowform(true)
    }

    const hideFormHandler = () => {
        setshowform(false);
        seteditobj(null)
    }

    const reloadHandler = ()=>{
        setreload(true)
    }

    const editexpensehandler = (obj)=>{
            setshowform(true)
            seteditobj(obj)
    }

    const activatepremium = ()=>{
        dispatch(Expenseactions.addpremium())
        console.log('premium')
    }

    const themechange = ()=>{
        dispatch(Themeactions.changeTheme())
    }

    const downloadcsv = (event)=>{ 
        const data = [
            [' Amount', 'Description ' , 'Catagory'] , ...expenses.map(expense=>{
                return [expense.value.Amount, expense.value.Description , expense.value.Catagory]
            })

            
    ]
        console.log(data)
    function makecsv(rows){
        return rows.map(r=> r.join(",")).join("\n")
    }
    const blob = new Blob([makecsv(data)], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'expenses.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
    useEffect(() => {
        document.body.style.backgroundImage = 'none'; 
        const fetchdata = async () => {
            const response = await fetch('https://react-api-test-d5c70-default-rtdb.firebaseio.com/Expense.json');
            const responsedata = await response.json();
            const expense = Object.entries(responsedata).map(([key, value]) => ({
                key,
                value,
            }));
           await dispatch(Expenseactions.InitialExpenses(expense)); 
           
    
        
        };
    
        fetchdata();
        setreload(false);
        
        
    
        return () => {
            document.body.style.backgroundImage = 'radial-gradient( circle 382px at 50% 50.2%,  rgba(73,76,212,1) 0.1%, rgba(3,1,50,1) 100.2% )';
        };
    }, [dispatch, reload]);

    useEffect (()=>{
setexpenses(expenseSelector)
    },[expenseSelector])

return <div>
    <h2>Welcome To Expense Page</h2> 
    {premium && <FormCheck type='switch' onChange={themechange}></FormCheck>}
    <p>Your profile is incomplete <Link to='/profile'>Complete</Link></p>
    <Button onClick={AddExpense}  className='m-2' >Add Expense</Button>
    {premium && <Button onClick={downloadcsv}>Download Expenses</Button>}
    { TotalAmount>=10000  && !premium && <Button onClick={activatepremium}>Activate Premium</Button>}
    {showform && <ExpenseForm  show={showform} value={editobj} hideform={hideFormHandler} reload={reloadHandler} />}
    {expenses ? <ExpenseList expense={expenses} reload={reloadHandler} edit={editexpensehandler}/> : ''}

</div>

}

export default Home