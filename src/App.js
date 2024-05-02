
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Signup from './Components/Authentication/Signup';
import Login from './Components/Authentication/Login';
import Home from './Components/Home/home'
import Profile from './Components/Profile/Profile';
import ForgetPassForm from './Components/Authentication/ForgetPassword';


function App() {
  return (
    <div className="App">
      <Route path='/signup'>
      <Signup/>
      </Route>
      <Route path='/login' >
        <Login/>
      </Route>
      <Route path='/Home' >
        <Home/>
      </Route>
      <Route path='/profile'>
        <Profile/>
      </Route>
      <Route path='/forgetpassword'>
        <ForgetPassForm/> 
      </Route>
      
    </div>
  );
}

export default App;
