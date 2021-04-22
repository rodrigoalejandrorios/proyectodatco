import React from "react";
import "./Client.css";
import ListAC from "../Components/Panels/Lists/List";

const Client = ({ client }) => {
  return (
    <>
      <div className="client-panel-bg">
        <h1>Bienvenido {client}</h1>
      </div>
    </>
  );
};

export default Client;
