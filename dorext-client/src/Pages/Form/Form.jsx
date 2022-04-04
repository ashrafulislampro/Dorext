import React from "react";
import "./Form.css";

const Form = ({ children }) => {
  return (
    <section className="form" data-aos="fade-in">
      {children}
    </section>
  );
};

export default Form;
<h1>This is login form</h1>;
