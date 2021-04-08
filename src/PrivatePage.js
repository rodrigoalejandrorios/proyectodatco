import { useState } from "react";
import { Redirect } from "react-router-dom";
import Menu from "./Components/Menu";
import ListMenu from "./Components/ListMenu";
import ModalAddClient from "./Components/AddClient";
import { set } from "react-hook-form";

function PrivatePage({ authorized, handleBoolean, endpoint }) {
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
    </>
  );
}

export default PrivatePage;
