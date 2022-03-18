import React, { useContext, useState } from "react";

const UserAuthProvider = ({ value, children }) => {
  const [loggedIn, setLoggedIn] = useState < boolean > value;

  return (
    <UserAuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserAuthContext.Provider>
  );
};

const UserAuthContext =
  React.createContext <
  {
    loggedIn,
    setLoggedIn,
  } >
  null;

export const useUserContext = () => useContext(UserAuthContext);

export default UserAuthProvider;
