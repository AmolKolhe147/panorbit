import React, { useState, createContext } from "react";
import { getUserProfile } from "./axios";

// useContext
export const DataContext = createContext();
const ContextApi = ({ children }) => {
  // states to get and set the data
  const [profile, setProfile] = useState(false);
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Function to get the data from api --> axios
  const fetchData = () => {
    setIsLoaded(true);
    setError(false);

    getUserProfile()
      .then((res) => {
        setData(res.data.users);
        setIsLoaded(false);
        setError(false);
      })
      .catch((e) => {
        setIsLoaded(false);
        setError(true);
      });
  };

  // Function to fetch users data using filter method.
  const filteredUsers = (id) => {
    getUserProfile()
      .then((res) => {
        console.log(res.users);
        setUserData(res.data.users.filter((el) => el.id === Number(id)));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const filteredUsers = (id) =>{
  //   setUserData(user.users.filter((el) => el.id === Number(id)));
  // }

  return (
    <DataContext.Provider
      value={{
        data,
        userData,
        filteredUsers,
        isLoaded,
        error,
        fetchData,
        setProfile,
        profile,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContextApi;
