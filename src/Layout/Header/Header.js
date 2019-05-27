import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>
            {" "}
            <span className="highlight">
              <image source="./" /> Hex. Inc
            </span>
          </h1>
        </div>
        <nav className="z-depth-0">
          <ul className="right">
            <BrowserRouter>
              <router>
                <li>
                  <Link smooth to="Home#showcase">
                    Home
                  </Link>
                </li>
                <li>
                  <Link smooth to="Home#services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link smooth to="Home#profiles">
                    Company
                  </Link>
                </li>
                <li>
                  <Link smooth to="Home#contact">
                    Contact Us
                  </Link>
                </li>
              </router>
            </BrowserRouter>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
