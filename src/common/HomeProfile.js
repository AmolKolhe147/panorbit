import React from "react";
import "../styles/homeprofile.css";
import Chat from "./Chat";

const HomeProfile = (props) => {
  const {name, profilepicture, username,email, phone, website, company, address } = props;

  return (
    <div className="MainPage">
      {/* Display the content on Left Side */}

      <div className="left">
        <img src={profilepicture} alt="profile img" />

        {/* To show the name */}

        <p>{name}</p>
        <div className="uname">
          <div className="basic">
            <h2 style={{ marginTop: "0px" }}>Username :</h2>
            <h2>e-mail :</h2>
            <h2>Phone :</h2>
            <h2>Website :</h2>
          </div>
          {/* Display the username, email, phone and website of user */}
          <div>
            <h3 style={{ marginTop: "0px" }}>{username}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <h3>{website}</h3>
          </div>
        </div>

        <hr />

        {/* To show the Company details */}
        <h2>Company</h2>
        <div className="companyDetails">
          <div>
            <h2 style={{ marginTop: "0px" }}>Name :</h2>
            <h2>catchphrase :</h2>
            <h2>Bs :</h2>
          </div>
          {/* To display the company name, catchPhrase and bs */}
          <div>
            <h3 style={{ paddingTop: "3px" }}>{company.name}</h3>
            <h3>{company.catchPhrase}</h3>
            <h3>{company.bs}</h3>
          </div>
        </div>
      </div>

      {/* Create a line in between */}
      <p className="line"></p>

      {/* Right side homepage details */}
      <div className="right">
        {/* To display full Address */}

        <h2>Address:</h2>
        <div className="address">
          <div>
            <h2 style={{ marginTop: "0px" }}>Street :</h2>
            <h2>Suite :</h2>
            <h2>City :</h2>
            <h2>Zipcode :</h2>
          </div>
          {/* Display address - street, city and zipcode */}
          <div>
            <h3 style={{ marginTop: "0px" }}>{address.street}</h3>
            <h3>{address.suite}</h3>
            <h3>{address.city}</h3>
            <h3>{address.zipcode}</h3>
          </div>
        </div>
        {/* To show the location on Google map */}
        <iframe width="500" height="350" className="Location"
          src={`https://maps.google.com/maps?q=${address.street},t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
        {/* Geo Location */}
        <div className="geoLocation">
          <p>
            Lat : <span>{address.geo.lat}</span>
          </p>
          <p>
            Lng : <span>{address.geo.lng}</span>
          </p>
        </div>
        {/* Chat Component */}
        <div>
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
