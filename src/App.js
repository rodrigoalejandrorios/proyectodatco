import { useState, useRef } from "react";
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
          <PrivatePage
            authorized={boo}
            handleBoolean={handleBoolean}
            endpoint={endpoint}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
