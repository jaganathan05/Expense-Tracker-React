import React,{useEffect} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Home.module.css'

function Home (){
    useEffect(() => {
        document.body.style.backgroundImage = 'none'; 
        return () => {
           
            document.body.style.backgroundImage = 'radial-gradient( circle 382px at 50% 50.2%,  rgba(73,76,212,1) 0.1%, rgba(3,1,50,1) 100.2% )';
        };
    }, []);

return <div>
    <h2>Welcome To Expense Page</h2>
    <p>Your profile is incomplete <Link to='/profile'>Complete</Link></p>
</div>

}

export default Home