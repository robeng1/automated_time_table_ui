import React from "react";
import "./Showcase.css";
import { Signer } from "crypto";

const Showcase = () => {
  return (
    <div>
      <section id="showcase">
        <div className="container">
          <h1>Efficient Scheduling Solutions</h1>
          <p>...</p>
        </div>
      </section>
      <section id="newsletter">
        <div class="wrapper center-align">
          <br />
          <form>
            <button type="submit" id="login_button">
              LOG IN
            </button>
            <button type="submit" id="signup_button">
              SIGN UP
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
