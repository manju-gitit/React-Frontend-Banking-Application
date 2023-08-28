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




