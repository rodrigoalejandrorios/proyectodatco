import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./Components/Menu";
import ListMenu from "./Components/ListMenu";

function PrivatePage({ authorized, handleBoolean }) {
  const [menu, setMenu] = useState(false);
  const [access, setAccess] = useState(true);

  const handleMenuAction = (state) => {
    setMenu(state);
  };

  if (!authorized) {
    return <Redirect to="/auth" />;
  }

  const handleAccess = (boolean) => {
    setAccess(boolean);
    handleBoolean(boolean);
  };

  return (
    <>
      <Router>
        <Route path="/">
          <Menu
            handleMenuAction={handleMenuAction}
            handleAccess={handleAccess}
          />
          <ListMenu handleMenuAction={handleMenuAction} menu={menu} />
        </Route>
      </Router>
    </>
  );
}

export default PrivatePage;
