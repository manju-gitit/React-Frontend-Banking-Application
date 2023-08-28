import React from 'react';
import Card from './Common/Card';
import FloatingForm from './Common/FloatingForm';

import UserContext from '../Context';

function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState('');
  const [withdraw, setwithdraw] = React.useState('');
  const [balance, setBalance] = React.useState(null);

  function findCurrentUser() {
      return ctx.users.find((user) => user.email === ctx.currentUser);
  }

  function initialBalance() {
      setBalance(findCurrentUser().balance)
      return balance
  }

  function validate(field) {
      if (!field) {
          setStatus('Error: No amount entered');
          setTimeout(() => setStatus(''), 3000);
          return false
      }
      return true;
  }


  function handlewithdraw() {
      if (!validate(withdraw, 'withdraw')) return;

      if (isNaN(withdraw
  )) {
          setStatus('Error: withdraw must be a number');
          return;
      }

      const withdrawNum = Number(withdraw
  );
      if (withdrawNum <= 0) {
          setStatus('Error: withdraw amount must be positive');
          return;
      }

      if (withdrawNum > balance) {
          setStatus('Insufficient funds.');
          return;
      }

      setBalance(balance - withdrawNum);
      findCurrentUser().balance -= withdrawNum;
      setStatus('withdraw sucessful')
  }
    return (
    <Card 
      bgcolor="primary"
      header='Withdraw'
      title = "Welcome to the withdraw page"
      text= "withdraw your funds here:"
      body = {ctx.currentUser !== null ? (
        <>
            {/*TODO: format correct*/}
            Balance <br /> {balance === null ? initialBalance() : balance} <br />
            Amount<br />
            <input type="input" className="form-control" id="" placeholder="Enter Amount" value={withdraw} onChange={e => setwithdraw
      (e.currentTarget.value)} /><br />
            <button type="submit" className="btn btn-light" onClick={handlewithdraw
    } disabled={withdraw === ''}>Withdraw</button>
        </>
        ) : (
        <>
            <h5>Please Login here</h5>
            <button type="submit" className="btn btn-light"><a href='/Login/' >Login </a></button>
        </>
    )}
    />
  );
}

export default Withdraw;
  