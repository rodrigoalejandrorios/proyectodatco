import { BrowserRouter as Router, Switch } from "react-router-dom";
import ReactRoutes from "./ReactRoutes";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <ReactRoutes />
      </Switch>
    </Router>
  );
};

export default Routes;
