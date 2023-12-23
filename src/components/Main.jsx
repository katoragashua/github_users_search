import React from "react";
import Stats from "./Stats";

const Main = () => {
  return (
    <main>
      <div className="profile-photo">
        <img src="" alt="" />
      </div>
      <div className="user">
        <div className="username"></div>
        <div className="date-joined"></div>
      </div>
      <p className="bio"></p>
      <Stats />
      <div className="contacts">
        <div className="location">
          <img src="" alt="" />
          <span></span>
        </div>
        <div className="url">
          <img src="" alt="" />
          <span></span>
        </div>
        <div className="twitter">
          <img src="" alt="" />
          <span></span>
        </div>
        <div className="github">
          <img src="" alt="" />
          <span></span>
        </div>
      </div>
    </main>
  );
};

export default Main;
