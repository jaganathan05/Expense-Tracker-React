
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Signup from './Components/Authentication/Signup';
import Login from './Components/Authentication/Login';
import Home from './Components/Home/home'
import Profile from './Components/Profile/Profile';
import ForgetPassForm from './Components/Authentication/ForgetPassword';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedin = useSelector(state=> state.Auth.isLoggedin) 
  console.log(isLoggedin)
  return (
    <div className="App">
      { !isLoggedin && <div>
        <Route path='/signup'>
      <Signup/>
      </Route>
      <Route path='/login' >
        <Login/>
      </Route>
      <Route path='/forgetpassword'>
        <ForgetPassForm/> 
      </Route> 
      <Route path='*'>
        <Redirect to='login'/>
      </Route>
        </div>}
      
      {isLoggedin &&  <div>
        <Route path='*'>
        <Redirect to='/Home' />
          </Route>
        <Route path='/Home' >
        <Home/>
      </Route>
      <Route path='/profile'>
        <Profile/>
      </Route>
        </div>}
      
      
      
    </div>
  );
}

export default App;
