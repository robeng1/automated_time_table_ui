import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section id="Call">
        <div className="Contact">
          <div>
            <form action="">
              <label>First Name</label>
              <textarea
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label>Last Name</label>
              <textarea
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />

              <label>Email</label>
              <textarea
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
              />

              <label>Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
