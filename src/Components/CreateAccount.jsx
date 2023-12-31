import React from "react";
import UserContext from '../Context';
import Card from '../Components/Common/Card';

function CreateAccount() {

  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { users, currentUser } = React.useContext(UserContext);
  
function validate(field, label) {
    if(!field) {
      setStatus('Error: '+ label + ' is blank, please enter value!');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name,email,password);
    if(!validate(name, 'name')) return;
    if(!validate(email, 'email')) return;
    if(!validate(password, 'password')) return;
    if(password.length < 8) {
      setStatus('Error: Password must be atleast 8 characters')
      return;
    }

    users.push({name, email, password, balance: 100});
    console.log(users);
    setShow(false);
  }

function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card 
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (
          <>
            Name<br/>
            <input type="input" className="form-control" id="name" 
            placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)}/><br/>
            Email address<br/>
            <input type="input" className="form-control" id="email" 
            placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="input" className="form-control" id="password" 
            placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick=
            {handleCreate} disabled={name + email + password === ''}>Create Account</button>
          </>) : (
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>
          )}
    />     
  );
};

export default CreateAccount;