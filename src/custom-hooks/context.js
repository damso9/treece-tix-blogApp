import React from "react";
import { useContext, useState } from "react";

const BlogContext = React.createContext();

const ContextComponenet = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [userName, setUserName] = useState("");

  const accessYes = () => {
    setIsLoggedIn(true);
  };
  const accessNo = () => {
    setIsLoggedIn(false);
  };

  return (
    <BlogContext.Provider value={{ isLoggedIn, accessYes, accessNo }}>
      {children}
    </BlogContext.Provider>
  );
};

const useGlobalCustomContext = () => {
  return useContext(BlogContext);
};

export { ContextComponenet, useGlobalCustomContext, BlogContext };
