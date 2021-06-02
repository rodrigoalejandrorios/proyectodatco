import { useState } from "react";
import "./Client.css";
import ListCLI from "../Components/Panels/Lists/ListCLI";
import GraphOne from "../Components/Charts/Graph";
import { PieModule, PositivosReales } from "../Components/Charts/Pie";
import Assistance from "../Components/Panels/PClient/Assistance";
import WeatherPanel from "../Components/WeatherPanel";
import GetDevices from "../Components/GetDevices";
import qui from "../Assets/qui.png";
import sg from "../Assets/sg.png";

const Client = ({ username, objStr, getItem, location }) => {
  return (
    <>
      <div className="client-panel-bg">
        <div className="cont-title-client">
          <h1>Bienvenido {username}</h1>
          <LogoOutput username={username} />
        </div>
        <div className="push-items">
          {username === getItem ? (
            <ul>
              {objStr.map((obj) => {
                return obj.values == true ? <ListCLI {...obj} /> : null;
              })}
            </ul>
          ) : null}
          <div className="cctv-panel">
            <div className="cont-video">
              <div>
                <h3>Video Camera</h3>
                <img
                  src={
                    "http://192.168.0.222/ISAPI/streaming/channels/102/httpPreview"
                  }
                />
              </div>
              <div>
                <h3>Thermal Camera</h3>
                <img
                  src={
                    "http://192.168.0.222/ISAPI/streaming/channels/202/httpPreview"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cont-icons-cli">
          <WeatherPanel location={location} />
          <GetDevices />
        </div>
        <Assistance />
        <div className="cont-icons-covid">
          <h1 className="Title-covid">Tabla Covid-19</h1>
        </div>
        <div className="cont-icons-dos">
          <PieModule />
          <PositivosReales />
          <GraphOne />
        </div>

        {/**Veeeeeeeeeeeeeeeeeeeeeer */}
      </div>
    </>
  );
};

const LogoOutput = ({ username }) => {
  switch (username) {
    case "Quilmes":
      return <img src={qui} alt={"Quilmes-logo"} />;
    case "Saint Gobain":
      return <img src={sg} alt={"Saint Gobain-logo"} />;
    default:
      return null;
  }
};

export default Client;
