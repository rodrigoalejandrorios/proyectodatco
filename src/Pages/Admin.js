import React, { useState, useEffect } from "react";
import "./Admin.css";
import AccessControl from "../Components/Panels/AccessControl";
import Cctv from "../Components/Panels/CCTV";
import AddItem from "../Components/AddItem";
import SensorIoT from "../Components/Panels/SMIoT";

const PanelAdmin = ({ client, objStr, setObjStr, setGetItem }) => {
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
          client={client}
          setGetItem={setGetItem}
        />
      </div>
    </>
  );
};

export default PanelAdmin;
