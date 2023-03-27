import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../api/ContextApi";
import { BsFillCaretUpFill } from "react-icons/bs";
import { AiOutlineCaretDown, AiOutlineUp } from "react-icons/ai";
import "../styles/chat.css";

const Chat = () => {
  const { data, isLoaded, error, fetchData } = useContext(DataContext);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  // Show Loading when loading the data
  if (isLoaded) {
    return (
      <div className="ring">
        Loading
        <span></span>
      </div>
    );
  }

  // Show error message when there is some error in API call or something
  if (error) {
    return <div className="error">Server Error....!</div>;
  }

  return (
    <div className="MainChat" style={{ marginTop: isShow ? "-270px" : "20px" }}>
      <div onClick={() => setIsShow(!isShow)} className="chatStyle">
        {/* React Icon for Up arrow */}
        <div>
          <BsFillCaretUpFill />
          <p>Chat</p>

          {/* React Icons for up and down arrow */}
        </div>
        {isShow ? <AiOutlineCaretDown /> : <AiOutlineUp />}
      </div>
      {isShow ? (
        <div className="showUsers">
          {/* Iterate the users data using map to show profile and name*/}
          {data && data.map((el) => (
              <div key={el.id}>
                <div className="displayUsers">
                  <img src={el.profilepicture} alt="" />
                  <p>{el.name}</p>
                </div>
                <hr />
              </div>
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chat;
