import { useState } from "react";
import { Link } from "react-router-dom";
import "./ListMenu.css";
import datco from "../Assets/datco.svg";
import closeicon from "../Assets/closeicon.svg";

const clicktrue = {
  transition: "all 0.5s ease-in-out",
  left: 0,
};

const clickfalse = {
  transition: "all 0.5s ease-in-out",
  left: "-100%",
};

const ListMenu = ({ handleMenuAction, menu, handleModalClient, client }) => {
  //Agregar clientes

  const handleModalActive = () => {
    handleModalClient(true);
    handleMenuAction(false);
  };
  const handleCloseMenuAction = () => {
    handleMenuAction(false);
  };

  return (
    <>
      {menu ? (
        <div>
          <div className="cont-listmenu" style={clicktrue}>
            <div className="cont-icons">
              <img
                onClick={handleCloseMenuAction}
                className="closeicon"
                src={closeicon}
              />
              <img className="logoDatco" src={datco} />
            </div>
            <ul className="list">
              <hr />
              {client.length > 0 ? (
                client.map((clientone) => {
                  return (
                    <div key={clientone.id}>
                      <Link key={clientone.id} to={clientone.id}>
                        <li key={clientone.id}>{clientone.client}</li>
                      </Link>
                      <hr />
                    </div>
                  );
                })
              ) : (
                <p>Agregar clientes...</p>
              )}

              <button onClick={handleModalActive}> + Add Client</button>
            </ul>
          </div>
          <div className="blur"></div>
        </div>
      ) : (
        <div>
          <div className="cont-listmenu" style={clickfalse}>
            <div className="cont-icons">
              <img className="closeicon" src={closeicon} />
              <img className="logoDatco" src={datco} />
            </div>
            <ul className="list">
              <hr />
              {client.length > 0 ? (
                client.map((clientone) => {
                  return (
                    <div key={clientone.id}>
                      <Link key={clientone.id} to={clientone.endpoint}>
                        <li key={clientone.id}>{clientone.client}</li>
                      </Link>
                      <hr />
                    </div>
                  );
                })
              ) : (
                <p>Agregar clientes...</p>
              )}
              <button> + Add Client</button>
            </ul>
          </div>
          <div className="blur-none"></div>
        </div>
      )}
    </>
  );
};

export default ListMenu;
