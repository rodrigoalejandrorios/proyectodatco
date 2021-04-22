import React from "react";
import "./CCTV.css";
import iconchart from "../../Assets/iconchart.svg";
import dangericon from "../../Assets/dangericon.svg";
import settingsicon from "../../Assets/settingsicon.svg";
import camera from "../../Assets/camera.svg";
import nopersons from "../../Assets/nopersons.svg";

const Cctv = () => {
  return (
    <div className="cctv-panel">
      <div className="title-cctv">
        <h1>CCTV</h1>
      </div>
      <div className="cont-video">
        <div>
          <h3>Face Recognition</h3>
          <iframe
            src="https://www.youtube.com/embed/wHn1_QVoXGM?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h3>License Plate Recognition</h3>
          <iframe
            src="https://www.youtube.com/embed/72GNxtQHs54"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
