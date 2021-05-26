import { useState } from "react";
import "./Client.css";
import ListCLI from "../Components/Panels/Lists/ListCLI";
import rain from "../Assets/weather/rain-w.svg";
import Weather from "../Components/Weather";

const Client = ({ id, username, objStr, getItem }) => {
  const [clima, setClima] = useState(false);

  const handleBoo = (state) => {
    setClima(state);
    // console.log(clima);
  };

  return (
    <>
      <div className="client-panel-bg">
        <div className="cont-title-client">
          <h1>Bienvenido {username}</h1>
        </div>
        <div className="push-items">
          {username === getItem ? (
            <ul>
              {objStr.map((obj) => {
                return obj.values == true ? <ListCLI {...obj} /> : null;
              })}
            </ul>
          ) : null}
          <div className="control-panel">
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
          <ListCLI
            image={rain}
            alt="rain"
            cname="weather"
            handleBoo={handleBoo}
          />
        </div>
        {clima ? <Weather handleBoo={handleBoo} /> : null}
      </div>
    </>
  );
};

export default Client;
