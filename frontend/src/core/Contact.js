import React from "react";
import Base from "../core/Base";
import img from "./undraw_contact_us_15o2.svg";

const Contact = () => {
  return (
    <Base title="Contact Us" description="How we can help ?">
      <div className="container col-10 mb-5">
        <div className="row">
          <img src={img} alt="contact" className="contact-img" />
        </div>
        <div className="row">
          <form
            method="post"
            action="/example"
            autocompelete="new-password"
            role="presentation"
            className="form-group contact-form"
          >
            <p className="lead text-bold">Fill in your email and message to proceed.</p>
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="you@example.com"
              required
            />
            <label for="textarea">Message</label>
            <textarea
              placeholder="Type your message here"
              id="textarea"
              className="form-control"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary mt-3">
              Send
            </button>
            <a href="#">
              <h6 class="left-align"></h6>
            </a>
          </form>
        </div>
      </div>
    </Base>
  );
};

export default Contact;
