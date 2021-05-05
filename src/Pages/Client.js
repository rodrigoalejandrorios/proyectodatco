import React from "react";
import "./Client.css";
import ListCLI from "../Components/Panels/Lists/ListCLI";

const Client = ({ id, client, objStr, getItem }) => {
  return (
    <>
      <div className="client-panel-bg">
        <div className="cont-title-client">
          <h1>Bienvenido {client}</h1>
        </div>
        <div className="push-items">
          {client === getItem ? (
            <ul>
              {objStr.map((obj) => {
                return obj.values == true ? <ListCLI {...obj} /> : null;
              })}
            </ul>
          ) : (
            <div className="noitem">
              <h3>No hay items añadidos</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Client;
