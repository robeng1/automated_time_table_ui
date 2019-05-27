import React from "react";

const Profile = props => {
  return (
    <div className="profile">
      <img src={require("../../resources/images/avatar.jpeg")} />
      <div className="description">
        <h6 className="name">FirstName LastName</h6>
        <hr />
        <h7>Position held</h7>
        <hr />
        <p>
          loremAute ad ullamco dolore laboris fugiat et tempor magna ex
          incididunt esse.
        </p>
      </div>
    </div>
  );
};

export default Profile;
