import React, { useRef } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import classes from './Login.module.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ForgetPassForm (){
    const history = useHistory()
    const emailref = useRef()
    const submitformHandler = async()=>{ 

        const EnteredEmail = emailref.current.value 
        if(EnteredEmail){
            const data = {
                requestType : 'PASSWORD_RESET',
                email : EnteredEmail
            }
            console.log(data)

            const response = await fetch ('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDAzYMyrP5pUcCeJ9QKrDnuXPIreusRbFw',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if(response.ok){
                console.log(response.json())
                alert('Forget Password Link Sended!')
                history.push('/login')

            }
        }

    }

    return <div className={classes["login-container"]}>

        <Form className={classes['login-box']}>
            <p>Enter the Email which you have registered !</p>
            <FloatingLabel  controlId="email" label='Email' className="mb-3"  >
                <Form.Control type='email' placeholder='dsa' required ref={emailref} ></Form.Control >
            </FloatingLabel>
            <Button className="btn-dark btn-outline-info" onClick={submitformHandler}>Send Link </Button>
        </Form>
    </div>

}
export default ForgetPassForm; 