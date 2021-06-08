import { useState } from "react";
import "./Client.css";
import GraphOne from "../Components/Charts/Graph";
import { PieModule, PositivosReales } from "../Components/Charts/Pie";
import PanelCCTV from "../Components/Panels/PannelCCTV";
import Assistance from "../Components/Panels/PClient/Assistance";
import WeatherPanel from "../Components/WeatherPanel";
import GetDevices from "../Components/GetDevices";
import qui from "../Assets/qui.png";
import sg from "../Assets/sg.png";

const Client = ({ username, location, item1, item2, item3, item4, item5 }) => {
  return (
    <>
      <div className="client-panel-bg">
        <div className="cont-title-client">
          <h1>Dashboard {username}</h1>
          <LogoOutput username={username} />
        </div>
        {item1 || item2 || item3 || item4 || item5 ? (
          <Dashboard
            location={location}
            item1={item1}
            item2={item2}
            item3={item3}
            item4={item4}
            item5={item5}
          />
        ) : (
          <div className="noitem">
            <h1>No hay items añadidos a este cliente</h1>
          </div>
        )}
      </div>
    </>
  );
};

const LogoOutput = ({ username }) => {
  switch (username) {
    case "Quilmes":
      return <img src={qui} alt={"Quilmes-logo"} />;
    case "Saint Gobain":
    case "Saint Gobaint":
      return <img src={sg} alt={"Saint Gobain-logo"} />;
    default:
      return null;
  }
};

const Dashboard = ({ location, item1, item2, item3, item4, item5 }) => {
  return (
    <>
      {item1 ? <PanelCCTV /> : null}
      {item2 || item3 ? (
        <div className="cont-icons-cli">
          {item2 ? <WeatherPanel location={location} /> : null}
          {item3 ? <GetDevices /> : null}
        </div>
      ) : null}
      <div className="contianer-data">
        {item4 ? <Assistance /> : null}
        {item5 ? (
          <div className="tables-info">
            <div className="cont-icons-covid">
              <h1 className="Title-covid">Tabla Covid-19</h1>
            </div>
            <div className="cont-icons-dos">
              <PieModule />
              <PositivosReales />
              <GraphOne />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Client;
