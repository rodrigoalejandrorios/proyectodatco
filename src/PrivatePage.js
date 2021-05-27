import { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Menu from "./Components/Menu";
import ListMenu from "./Components/ListMenu";
import PanelAdmin from "./Pages/Admin";
import ModalAddClient from "./Components/AddClient";
import Client from "./Pages/Client";
import structure from "./Components/Panels/Structure";
import { useGet } from "./Utils/useAxios";

const PrivatePage = ({ authorized, handleBoolean, endpoint, setEndpoint }) => {
  const [objStr, setObjStr] = useState(structure);
  const [menu, setMenu] = useState(false);
  const [access, setAccess] = useState(true);
  const [modal, setModal] = useState(false);
  const [client, setClient] = useState([]);
  const [getItem, setGetItem] = useState("");
  const [user, isFetching, error] = useGet({ url: "/users" });
  document.title = "Proyecto | Grupo DATCO";

  console.log(endpoint);

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
      <Menu handleMenuAction={handleMenuAction} handleAccess={handleAccess} />
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
      <Route exact path="/">
        <PanelAdmin
          client={client}
          endpoint={endpoint}
          objStr={objStr}
          setObjStr={setObjStr}
          setGetItem={setGetItem}
        />
      </Route>

      {user.length > 0 ? (
        user.map((info) => {
          return (
            <Route exact key={info.id} path={`/${info.endpoint}`}>
              <Client {...info} objStr={objStr} getItem={getItem} />
            </Route>
          );
        })
      ) : (
        <div></div>
      )}
      <Route exact path="/dangerpanel">
        <DangerPanel />
      </Route>
    </>
  );
};

const DangerPanel = () => {
  return (
    <div>
      <h1>Hola danger</h1>
    </div>
  );
};

export default PrivatePage;
