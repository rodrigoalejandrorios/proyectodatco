import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivatePage from "./PrivatePage";
import Login from "./Views/Login";
import Routes from "./Routes/index";

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
