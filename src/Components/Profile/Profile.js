import React ,{useEffect, useRef}from "react";
import { FloatingLabel, Form ,Button } from "react-bootstrap";
import classes from './Profile.module.css'
import {Person , Image } from 'react-bootstrap-icons'

function Profile (){
    useEffect(() => {
        document.body.style.backgroundImage = 'none'; 
        return () => {
           
            document.body.style.backgroundImage = 'radial-gradient( circle 382px at 50% 50.2%,  rgba(73,76,212,1) 0.1%, rgba(3,1,50,1) 100.2% )';
        };
    }, []);

    const fullnameref = useRef();
    const ImageurlRef = useRef();

    const submitformhandler =async (event)=>{
        event.preventDefault()
        const enteredName = fullnameref.current.value
        const enteredImageurl = ImageurlRef.current.value 
        if(enteredName.trim().length > 2 && enteredImageurl.trim().length >2){
            const data = { 
                idToken : localStorage.getItem('token'),
                displayName : enteredName,
                photoUrl : enteredImageurl,
                returnSecureToken : true
            }
            console.log(data)

            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDAzYMyrP5pUcCeJ9QKrDnuXPIreusRbFw',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
          })

          if(response.ok){
            const responsedata = await response.json()
            console.log(responsedata)
            alert('profile Updated')
          }
        }
        else{
            alert('Fill the all inputs')
        }
        
    }


    return <div className={classes["ProfileForm-Container"]}> 
    
        <Form className={classes['ProfileForm-Box']} >
            <h2>Complete Your Profile</h2>
            <FloatingLabel  controlId="FullName" label={<span><Person/> FullName</span>} className="mb-3"  >
                <Form.Control type='text' placeholder='dsa' required ref={fullnameref} ></Form.Control >
            </FloatingLabel>
            <FloatingLabel controlId="ImageUrl" label={<span><Image/> Image Url</span>} className="mb-3"  >
                <Form.Control type='text' placeholder='dsa' ref={ImageurlRef} required></Form.Control>
            </FloatingLabel>
            <Button  className="btn-dark btn-outline-info" onClick={submitformhandler} >Submit</Button>

        </Form>
    </div>

}

export default Profile;