import axios from "axios";

// function to get the User Profiles
 
export const getUserProfile = () => {
  return axios.get("https://panorbit.in/api/users.json");
};


