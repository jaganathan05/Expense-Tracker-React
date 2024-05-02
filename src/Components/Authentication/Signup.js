import React, {  useRef, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import classes from './Signup.module.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Signup (){
    const [isvalidated,setvalidated]=useState(false)
    const emailref = useRef()
    const passwordref = useRef()
    const conformpasswordref = useRef() 
    const submitformHandler = async (event)=>{ 
        event.preventDefault()
        let formvalid = false;
        
        const EnteredEmail = emailref.current.value
        const EnteredPassword = passwordref.current.value
        const conformpassword = conformpasswordref.current.value

        if(!EnteredEmail.trim().includes('@')){
            
                    alert('Enter Email Correctly')
                    setvalidated(false)
        }
        else{
            if(EnteredPassword.length < 6){
                alert('PassWord Must Contain 6 letters')
                setvalidated(false)
              }
              if(EnteredPassword.length >= 6){
                  if (EnteredPassword !== conformpassword){
                    alert('PassWord MisMatch ')
                    setvalidated(false)
                  }
                  else{
                    formvalid= true
                    setvalidated(true)
                    
                  }
              }
        }

        if(formvalid){
       
          const data ={
                    email: EnteredEmail,
                    password: EnteredPassword,
                    returnSecureToken : true
          } 
          //console.log(data)

          const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAzYMyrP5pUcCeJ9QKrDnuXPIreusRbFw',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
          })

          if(response.ok){
            console.log('signup successfull')
          }
          else {
            const errorData = await response.json(); 
            setvalidated(false)
            alert(errorData.error.message); 
        }
        }
        

        

    }


   

    return <div className={classes["signup-container"]}>

        <Form validated={isvalidated} className={classes['signup-box']}>
            <h2>Signup</h2>
            <FloatingLabel  controlId="email" label='Email' className="mb-3"  >
                <Form.Control type='email' placeholder='dsa' required ref={emailref} ></Form.Control >
            </FloatingLabel>
            <FloatingLabel controlId="password" label='Password' className="mb-3"  >
                <Form.Control type='password' placeholder='dsa' ref={passwordref} ></Form.Control>
            </FloatingLabel>
            <FloatingLabel controlId="password" label='Conform Password' className="mb-3">
                <Form.Control type='password' placeholder='dsa' ref={conformpasswordref} ></Form.Control>
            </FloatingLabel>
            <Button className="btn-dark btn-outline-info" onClick={submitformHandler}>Submit</Button>
            <br></br>
            <Link className={classes['link']} to='/login'>If You Already Have An Account Login !</Link>
        </Form>
    </div>

}

export default Signup