import React from "react";
import { Redirect, Route } from "react-router";
import { PuffLoader } from "react-spinners";
import useAll from "../../hooks/useAll";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAll();

  if (loading) {
    return (
      <div className="spinner-box" style={{ minHeight: "100vh" }}>
        <PuffLoader color="#fc5b62" />
      </div>
    );
  } //initial loading before getting user information

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/form/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
