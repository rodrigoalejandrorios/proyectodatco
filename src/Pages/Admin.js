import React, { useState, useEffect } from "react";
import "./Admin.css";
import AccessControl from "../Components/Panels/AccessControl";
import Cctv from "../Components/Panels/CCTV";
import AddItem from "../Components/AddItem";

const PanelAdmin = ({ client }) => {
  const [infoitem, setInfoitem] = useState({});

  const handleInfoitem = (value) => {
    setInfoitem(value);
  };

  return (
    <>
      <div className="panel-bg">
        <AccessControl infoitem={infoitem} />
        <Cctv />
        <AddItem handleInfoitem={handleInfoitem} client={client} />
      </div>
    </>
  );
};

export default PanelAdmin;
