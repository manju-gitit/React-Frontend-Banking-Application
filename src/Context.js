import { createContext, useState } from 'react';

const UserContext = createContext({ currentUser: null, users: [] });

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { name: 'Manju', email: 'manju@mit.edu', password: 'secret', balance: 100 }
  ]);
  const [currentUser, setcurrentUser] = useState(null);

  return (
    <UserContext.Provider value={{ currentUser, users }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;

/* const GlobalUserContext = ({moreUsers}) => {
    const [Users, setUsers] = useState({});
    const [newUser, setnewUser] = useState({});
    const [CurrentUser, setCurrentUser] = useState({});
    const [newBalance , setNewBalance] = useState(CurrentUser.balance);

    const defaultAccount = {users: [{name: 'Manju', email:'manju@mit.edu',password:'secret',balance:100}]};
return (
    <UserContext.Provider
        value = {{users: {defaultAccount}}}
        {
            Users,
            newUser,
            CurrentUser,
            newBalance  }}    
    >
        {moreUsers}
    </UserContext.Provider>
  )
}

export const useGlobalUserContext = () => {
    useContext(GlobalUserContext);
}    

export default GlobalUserContext; */



