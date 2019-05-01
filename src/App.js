import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Showcase from './Showcase/Showcase';
import Service from './Service/Service';
import Profile from './Profile/Profile';
import Mission from './Mission/Mission';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Showcase />
        <div id = "services">
        <h1>Our Services</h1>
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        </div>
        <div id= "mission">
          <Mission />
          <Mission />
        </div>
        <div id = "profiles">
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </div>
      </div>
    );
  }
}

export default App;