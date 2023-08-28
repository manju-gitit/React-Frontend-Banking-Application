import React from 'react';
import Card from './Common/Card'
import bank from '../bank.png';
import UserContext from '../Context';

//import GlobalUserContext from '../Context';

function Home() {
    //const ctx = React.useContext(GlobalUserContext);
    const ctx = React.useContext(UserContext);
    return (
      <Card 
        txtcolor = "black"
        header="BadBank Landing Page"
        title="Welcome to the bank"
        text="You can use this bank"
        body={<img src={bank} className="img-fluid" alt="Responsive image"/>}
      />
    );
  }
  export default Home;