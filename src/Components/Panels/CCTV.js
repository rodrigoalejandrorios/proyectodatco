import React from "react";
import "./CCTV.css";
import iconchart from "../../Assets/iconchart.svg";
import dangericon from "../../Assets/dangericon.svg";
import settingsicon from "../../Assets/settingsicon.svg";
import camera from "../../Assets/camera.svg";
import nopersons from "../../Assets/nopersons.svg";

const Cctv = () => {
  return (
    <div className="control-panel">
      <div className="title-cctv">
        <h1>CCTV</h1>
      </div>
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
      <div className="cont-tercerfila">
        <div className="img-chart-cont">
          <img src={iconchart} />
        </div>
        <div className="cont-icons-cctv">
          <ul>
            <li>
              <img src={dangericon} />
            </li>

            <li>
              <img src={settingsicon} />
            </li>
            <li>
              <img src={camera} />
            </li>
            <li>
              <img src={nopersons} />
            </li>
          </ul>
        </div>
        <div className="img-chart-cont">
          <img src={iconchart} />
        </div>
      </div>
    </div>
  );
};

export default Cctv;
