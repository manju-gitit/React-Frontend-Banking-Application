import React from 'react';
import UserContext from '../Context';
import Card from './Common/Card'
import Table from 'react-bootstrap/Table'

function AllData(){
    const ctx = React.useContext(UserContext);
    return (
      <Card 
      bgcolor = "primary"
      header = "All Data"
      title = "Welcome to User Dashboard"
      text= "All User data"
      body ={
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th >Name</th>
                <th >Email</th>
                <th >Balance</th>
              </tr>
            </thead>
            <tbody>
              {ctx.users &&
                ctx.users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>${user.balance}</td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
      }
    />
    );
}

export default AllData;
  