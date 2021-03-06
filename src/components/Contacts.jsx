import React from "react";

const Contact = (props) => {

  return (
    <form className="contactMe">
      <h1 className="contactHeader">Contact Me</h1>
      <label htmlFor="phone">Phone: </label>
      <a className="phone" href="tel:7472559610">
        Give me a call <span>747-255-9610</span>
      </a>
      <label htmlFor="email">Email:</label>
      <a className="email" href="mailto:alexc017@yahoo.com">
        Email me <span>alexc017@yahoo.com</span>
      </a>
    </form>
  );
};
export default Contact;
