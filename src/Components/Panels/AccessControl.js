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

const AccessControl = () => {
  return (
    <>
      <div className="control-panel">
        <div className="panel-ac"></div>
        <div className="title-ac">
          <h1>Access Control</h1>
        </div>
        <div className="cont-item-ac">
          <ul className="ul-item">
            <Link to="/dangerpanel">
              <ListAC key={uuidv4()} image={dangericon} alt={"dangericon"} />
            </Link>
            <ListAC key={uuidv4()} image={warningicon} alt={"warningicon"} />
            <ListAC key={uuidv4()} image={personicon} alt={"personicon"} />
            <ListAC key={uuidv4()} image={nopersons} alt={"nopersons"} />
            <ListAC key={uuidv4()} image={tarjet} alt={"tarjet"} />
            <ListAC key={uuidv4()} image={settingsicon} alt={"settingsicon"} />
          </ul>
        </div>
        <div className="segunda-fila">
          <ul>
            <ListAC
              key={uuidv4()}
              image={chart}
              alt={"chart"}
              cname="chartline"
            />
            <ListAC key={uuidv4()} image={llave} alt={"llave"} cname="llave" />
            <ListAC
              key={uuidv4()}
              image={personicon}
              alt={"personicon"}
              cname="person"
            />
          </ul>
        </div>
        <div className="tercer-fila">
          <ul>
            <ListAC key={uuidv4()} image={chartbars} alt={"chartbars"} />
            <ListAC key={uuidv4()} image={cakechart} alt={"cakechart"} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccessControl;
