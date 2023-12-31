import React from 'react';
import { UserContext } from '../../Context';

function NavBar() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/Login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/CreateAccount">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Deposit">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Withdraw">Withdraw</a>
            </li>          
            <li className="nav-item">
              <a className="nav-link" href="/AllData">AllData</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavBar;