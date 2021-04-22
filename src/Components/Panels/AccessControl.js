import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AccessControl.css";
import ListAC from "./Lists/List";
import { v4 as uuidv4 } from "uuid";

//SVG Image
import dangericon from "../../Assets/dangericon.svg";
import warningicon from "../../Assets/warningicon.svg";
import personicon from "../../Assets/personicon.svg";
import nopersons from "../../Assets/nopersons.svg";
import tarjet from "../../Assets/tarjet.svg";
import settingsicon from "../../Assets/settingsicon.svg";
import chart from "../../Assets/chart.svg";
import llave from "../../Assets/llave.svg";
import chartbars from "../../Assets/chartbars.svg";
import cakechart from "../../Assets/cakechart.svg";

const AccessControl = ({ infoitem }) => {
  const [iditem, setIditem] = useState({});

  return (
    <>
      <div className="control-panel">
        <div className="panel-ac"></div>
        <div className="title-ac">
          <h1>Access Control</h1>
        </div>
        <div className="cont-item-ac">
          <ul className="ul-item">
            <ListAC
              key={uuidv4()}
              image={dangericon}
              alt={"dangericon"}
              link={"/dangerpage"}
            />

            <ListAC
              key={uuidv4()}
              image={warningicon}
              alt={"warningicon"}
              link={"/warningpage"}
            />
            <ListAC
              key={uuidv4()}
              image={personicon}
              alt={"personicon"}
              link={"/personal"}
            />
            <ListAC
              key={uuidv4()}
              image={nopersons}
              alt={"nopersons"}
              link={"/adelantos"}
            />
            <ListAC
              key={uuidv4()}
              image={tarjet}
              alt={"tarjet"}
              link={"/marcadores"}
            />
            <ListAC
              key={uuidv4()}
              image={settingsicon}
              alt={"settingsicon"}
              link={"/settings-tools"}
            />
          </ul>
        </div>
        <div className="segunda-fila">
          <ul>
            <ListAC
              key={uuidv4()}
              image={chart}
              alt={"chart"}
              cname="chartline"
              link={"/info-personal"}
            />
            <ListAC
              key={uuidv4()}
              image={llave}
              alt={"llave"}
              cname="llave"
              link={"/ingresos"}
            />
            <ListAC
              key={uuidv4()}
              image={personicon}
              alt={"personicon"}
              cname="person"
              link={"/asistencia"}
            />
          </ul>
        </div>
        <div className="tercer-fila">
          <ul>
            <ListAC
              key={uuidv4()}
              image={chartbars}
              alt={"chartbars"}
              link={"/informes"}
            />
            <ListAC
              key={uuidv4()}
              image={cakechart}
              alt={"cakechart"}
              link={"/comparaciones"}
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccessControl;
