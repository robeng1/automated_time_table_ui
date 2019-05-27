import React, { Component } from "react";
import Service from "../Cards_Forms/Service/Service";
import Profile from "../Cards_Forms/Profile/Profile";
import Mission from "../Layout/Section/Mission/Mission";
import Bottom from "../Layout/Section/Bottom/Bottom";
import Footer from "../Layout/Footer/Footer";
import Showcase from "../Layout/Section/Showcase/Showcase";

class Home extends Component {
  render() {
    return (
      <div>
        <Showcase />
        <div id="services">
          <div>
            <h1>Our Services</h1>
            <Service />
            <Service />
            <Service />
            <Service />
          </div>
          <Service />
          <Service />
        </div>

        <Mission />
        <div id="profiles">
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </div>
        <div id="contact">
          <Bottom />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
