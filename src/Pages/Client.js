import React from "react";
import "./Client.css";

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
