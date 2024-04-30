
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Signup from './Components/Authentication/Signup';
import Login from './Components/Authentication/Login';


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
<h2>Welcome To Home Page</h2>
      </Route>
      
    </div>
  );
}

export default App;
