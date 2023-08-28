import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateAccount from "./Components/CreateAccount";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Deposit from "./Components/Deposit";
import Withdraw from "./Components/Withdraw";
import AllData from "./Components/AllData";
import NavBar from "./Components/Common/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import UserContextProvider from './Context'

function App() {

  return (
    <UserContextProvider>
      <Router>
        <div className="App">
            <NavBar/>
              <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/CreateAccount' element={<CreateAccount/>} />
               <Route path='/Deposit' element={<Deposit/>} />
                <Route path='/Withdraw' element={<Withdraw/>} />
                <Route path='/AllData' element={<AllData/>} />
              </Routes>  
        </div>     
      </Router> 
    </UserContextProvider> 
  );
}

export default App;
