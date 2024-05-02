
import React, { Fragment } from 'react';
import ReactDom from 'react-dom'

const  ModelOverlay = props =>{ 

    return <div>
        <div > {props.children}</div>
    </div>
}


const portalElement = document.getElementById('overlay')
function Model (props){
 return <Fragment>
    {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
 </Fragment>
}
export default Model