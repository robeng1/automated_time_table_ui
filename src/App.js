import React, { Component } from "react";
import "./App.css";
import Header from "./Layout/Header/Header";
import SignUp from "./Cards_Forms/Authentification/SignUp";
import SignIn from "./Cards_Forms/Authentification/SignIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <div className="Auth">
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
