import React, { useState } from "react";
import { Route } from "react-router-dom";
import Login from "../Views/Login";
import PrivatePage from "../PrivatePage";

const ReactRoutes = () => {
  const [boo, setBoo] = useState(false);
  const [endpoint, setEndpoint] = useState([]);

  const handleBoolean = (boolean) => {
    setBoo(boolean);
  };
  return (
    <>
      <Route
        path="/auth"
        exact
        component={() => <Login handleBoolean={handleBoolean} />}
      />
      <Route
        path="/"
        exact
        component={() => (
          <PrivatePage
            authorized={boo}
            handleBoolean={handleBoolean}
            endpoint={endpoint}
          />
        )}
      />
    </>
  );
};

export default ReactRoutes;
