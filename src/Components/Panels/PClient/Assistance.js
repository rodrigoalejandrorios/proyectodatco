import React from "react";
import "./Assistance.css";
import assistance from "../../../Assets/assistance.svg";

const Assistance = () => {
  return (
    <>
      <div className="cont-title-assis">
        <h1 className="title-assis">Tabla de asistencias</h1>
      </div>
      <div className="panel-assistance">
        {/**Panel asistencias */}
        <div className="asistencias">
          <h1 className="title">Asistencias del día</h1>
          <div className="separ-assis"></div>
          <div className="data-assis">
            <img src={assistance} />
            <h1 className="num-assis">8441</h1>
          </div>
        </div>
        {/**Panel ausencias */}
        <div className="ausencias">
          <h1 className="title">Ausencias del día</h1>
          <div className="separ-assis"></div>
          <h1 className="num-aus">45</h1>
        </div>
        {/**Panel ausencias */}
        <div className="ausenciascert">
          <h1 className="title">Ausencias certificadas</h1>
          <div className="separ-assis"></div>
          <h1 className="num-aus">24</h1>
        </div>
      </div>
    </>
  );
};

export default Assistance;
