import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./Components/Menu";
import ListMenu from "./Components/ListMenu";
import ModalAddClient from "./Components/AddClient";

const PrivatePage = ({ authorized, handleBoolean, endpoint }) => {
  const [menu, setMenu] = useState(false);
  const [access, setAccess] = useState(true);
  const [modal, setModal] = useState(false);
  const [client, setClient] = useState([]);

  const handleModalClient = (boolean) => {
    setModal(boolean);
  };

  const handleMenuAction = (state) => {
    setMenu(state);
  };

  if (localStorage.getItem("Session")) {
    authorized = true;
  }

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
        <Switch>
          <Route path="/">
            <Menu
              handleMenuAction={handleMenuAction}
              handleAccess={handleAccess}
            />
            <ListMenu
              handleMenuAction={handleMenuAction}
              menu={menu}
              handleModalClient={handleModalClient}
              client={client}
            />
            {!modal ? (
              <div></div>
            ) : (
              <ModalAddClient
                modal={modal}
                handleModalClient={handleModalClient}
                client={client}
                endpoint={endpoint}
                setClient={setClient}
              />
            )}
            {endpoint.length > 0 ? (
              endpoint.map((info) => {
                return (
                  <Route key={info.id} path={`/${info.endpoint}`}>
                    <Client {...info} />
                  </Route>
                );
              })
            ) : (
              <div></div>
            )}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const Client = ({ client }) => {
  return (
    <>
      <div>Hola {client}</div>
    </>
  );
};

export default PrivatePage;
