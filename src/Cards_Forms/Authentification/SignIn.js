import React, { Component } from "react";
import "./SignIn.css";

class SignIn extends Component {
  render() {
    return (
      <div>
        <h4>Login Form</h4>
        <div id="login-page" class="row">
          <div class="col s12 z-depth-6 card-panel">
            <form class="login-form">
              <div class="row margin">
                <div class="input-field col s12">
                  <i class="mdi-social-person-outline prefix" />
                  <input class="validate" id="user_email" type="email" />
                  <label
                    for="email"
                    data-error="wrong"
                    data-success="right"
                    class="center-align"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div class="row margin">
                <div class="input-field col s12">
                  <i class="mdi-action-lock-outline prefix" />
                  <input id="user_pass" type="password" />
                  <label for="password">Password</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12 m12 l12  login-text">
                  <input type="checkbox" id="remember-me" />
                  <label for="remember-me">Remember me</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <a
                    href="login.html"
                    class="btn waves-effect waves-light col s12"
                  >
                    Login
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s6 m6 l6">
                  <p class="margin medium-small">
                    <a href="">Register Now!</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
