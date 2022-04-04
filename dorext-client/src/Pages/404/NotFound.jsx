import React from "react";
import "./NotFound.css"; //import css style
import image from "../../assets/images/others/404.svg";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  const gotToHome = () => {
    history.push("/home");
  };
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="error-page">
      <img src={image} alt="" />
      <h2>Oops! Page Not Found</h2>
      <div className="btn-box mt-2">
        <button onClick={gotToHome} className="btn btn-success me-3">
          Go to home
        </button>
        <button onClick={goBack} className="btn btn-dark">
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
