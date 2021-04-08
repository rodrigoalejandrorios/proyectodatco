import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivatePage from "./PrivatePage";
import Login from "./Views/Login";

function App() {
  const [boo, setBoo] = useState(false);
  const [endpoint, setEndpoint] = useState([]);

  const handleBoolean = (boolean) => {
    setBoo(boolean);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/auth"
            component={() => <Login handleBoolean={handleBoolean} />}
          />
          <Route
            exact
            path="/"
            component={() => (
              <PrivatePage
                authorized={boo}
                handleBoolean={handleBoolean}
                endpoint={endpoint}
              />
            )}
          />
          <Route
            exact
            path={`/${endpoint.endpoint}`}
            component={() => <VariableComp />}
          />
        </Switch>
      </Router>
    </>
  );
}

const VariableComp = ({ value }) => {
  return (
    <div>
      <h1>Hola {value}</h1>
    </div>
  );
};

export default App;
