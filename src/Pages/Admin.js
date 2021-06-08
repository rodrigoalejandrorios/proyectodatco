import React, { useState, useEffect } from "react";
import "./Admin.css";
import AccessControl from "../Components/Panels/AccessControl";
import Cctv from "../Components/Panels/CCTV";
import AddItem from "../Components/AddItem";
import SensorIoT from "../Components/Panels/SMIoT";

const PanelAdmin = ({ objStr, setObjStr, onadditem, handleAddItem }) => {
  const [infoitem, setInfoitem] = useState({});

  const handleInfoitem = (value) => {
    setInfoitem(value);
  };

  return (
    <>
      <div className="panel-bg">
        <AccessControl objStr={objStr} setObjStr={setObjStr} />
        <Cctv />
        <SensorIoT />
        <AddItem
          handleInfoitem={handleInfoitem}
          objStr={objStr}
          handleAddItem={handleAddItem}
          onadditem={onadditem}
        />
      </div>
    </>
  );
};

export default PanelAdmin;
