import React, { useState } from 'react';
import UserContext from '../Context';
import Card from './Common/Card';

function Login(){
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const ctx = React.useContext(UserContext);

    const isLoggedIn = ctx.currentUser !== null;
    console.log('isLoggedIn '+isLoggedIn);
    const [loggedIn, setLoggedIn] = useState(isLoggedIn);

    function findUserEmail(name) {
      return name.email === email
    }
  
    function validateUserSignin() {
      if(ctx.users.find(findUserEmail)) {
        ctx.currentUser = ctx.users.find(findUserEmail);
        ctx.userEmail = ctx.users.findIndex(user => user.email === email);
        console.log(ctx.currentUser)
      } else {
        setStatus('Error: Email is incorrect');
        return false
      }

    if (password != ctx.currentUser.password) {
        delete ctx.users.currentUser;
        setStatus('Error: Password is incorrect');
        return false
    }

      setStatus('')
    return true
    }

    function signin() {
      if(!validateUserSignin()) return;
      ctx.currentUser = email;
      setLoggedIn(true)
    }

    function signout() {
      ctx.currentUser = null;
      setEmail('')
      setPassword('')
      setLoggedIn(false)
  }

    return (
        <Card
            bgcolor="primary"
            title="Login"
            status={status}
            body={!loggedIn ? (
                <>
                    Email address<br />
                    <input
                        type="input"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={e => { setEmail(e.currentTarget.value) }}
                    />
                    <br />
                    Password
                    <br />
                    <input
                        type="input"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)} />
                    <br />
                    <button
                        type="submit"
                        className="btn btn-light"
                        onClick={() => signin()}
                    >
                        Login Page
                    </button>
                </>
            ) : (
                <>
                    <h5>Login in Success</h5>
                    <button
                        type="submit"
                        className="btn btn-light"
                        onClick={() => signout()}
                    >
                        LogOut
                    </button>
                </>
            )
            }
        />
    )
}

  export default Login;
  