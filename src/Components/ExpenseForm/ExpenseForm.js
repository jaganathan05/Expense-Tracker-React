import React, { useRef, useState , useEffect}  from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Model from "../Model/Model";
import { CurrencyRupee } from "react-bootstrap-icons";
import classes from './ExpenseForm.module.css'

function ExpenseForm (props){
    const [obj ,setobj]=useState(props.value)
    const [show,setshow]= useState(props.show)
    const Catagoryref = useRef()
    const Amountref = useRef ()
    const DescRef = useRef()

    const HandleHide = ()=>{
        setshow(false)
        props.hideform()
        
    }
    useEffect(() => {
        setobj(props.value);
    }, [props.value]);
    
    const Expenseformhandler = async (event) => {
        event.preventDefault();
        const EnteredCatagory = Catagoryref.current.value;
        const EnteredAmount = Amountref.current.value;
        const EnteredDesc = DescRef.current.value;
    
        if (EnteredAmount && EnteredDesc.trim().length > 2 && EnteredCatagory) {
            const data = {
                id: Math.random(),
                Catagory: EnteredCatagory,
                Amount: EnteredAmount,
                Description: EnteredDesc
            };
    
            try {
                const response = await fetch('https://react-api-test-d5c70-default-rtdb.firebaseio.com/Expense.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
    
                if (!response.ok) {
                    throw new Error('Failed to post data to the server');
                }
    
                alert('Expense Added');
                setshow(false);
                props.hideform();
                props.reload()
            } catch (error) {
                console.error('Error posting data:', error);
                alert('Failed to add expense. Please try again later.');
            }
        } else {
            alert('Fill Expense Details Correctly');
        }
    };

    const ExpenseEditHandler = async(event)=>{
        event.preventDefault();
        const EnteredCatagory = Catagoryref.current.value;
        const EnteredAmount = Amountref.current.value;
        const EnteredDesc = DescRef.current.value;
    
        if (EnteredAmount && EnteredDesc.trim().length > 2 && EnteredCatagory) {
            const data = {
                Catagory: EnteredCatagory,
                Amount: EnteredAmount,
                Description: EnteredDesc
            };
            
            const response = await fetch(`https://react-api-test-d5c70-default-rtdb.firebaseio.com/Expense/${obj.key}.json`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })

            if(response.ok){
                alert('Expense Edited');
                setshow(false);
                props.hideform();
                props.reload()
            }
    }
    }
    


    return <Model className={classes['modal']}>
        <Modal show={show} onHide={HandleHide}>
            <Modal.Header><Modal.Title>Add New Expense</Modal.Title></Modal.Header>
            <Modal.Body className={classes['modal']}>
            <Form >
            
            <Form.Label className={classes['lable']}><CurrencyRupee/> Expense Amount</Form.Label>
            <Form.Control type='number' placeholder="Amount" ref={Amountref} defaultValue={obj ? obj.value.Amount : ''} required></Form.Control>
            <Form.Label className={classes['lable']}>Expense Description</Form.Label>
            <Form.Control type='text' placeholder="Description" ref={DescRef} defaultValue={obj ? obj.value.Description : ''}></Form.Control>
            <Form.Label className={classes['lable']}>Expense Catagory</Form.Label>
            <Form.Select className="form-control-sm" ref={Catagoryref} defaultValue={obj ? obj.value.Catagory : ''}>
            <option value={"Food"} className={classes["option"]}>Food</option>
            <option value={"Petrol"} className={classes["option"]}>Petrol</option>
            <option value={"Rent"} className={classes["option"]}>Rent</option>
            <option value={"Travel"} className={classes["option"]}>Travel</option>
            <option value={"Salary"} className={classes["option"]}>Salary</option>
            </Form.Select>
            <Button onClick={ obj ? ExpenseEditHandler :Expenseformhandler}>Submit</Button>
        </Form>
            </Modal.Body>
        
        <Modal.Footer><Button className='btn-danger' onClick={HandleHide}> close</Button></Modal.Footer>
        

    </Modal> </Model>

}

export default ExpenseForm; 