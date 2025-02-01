import React, { createContext, useEffect, useState } from "react";
export const CardContex = createContext({});
const CurdContext = ({ children }) => {
     const [users, setUsers] = useState([]);
     useEffect(() => {
       fetch("http://localhost:5000/users")
         .then((res) => res.json())
         .then((data) => setUsers(data));
     }, []);
  const CurdInfo = {
     users,
  };
  return (
    <CardContex.Provider value={CurdInfo}> {children} </CardContex.Provider>
  );
};

export default CurdContext;
