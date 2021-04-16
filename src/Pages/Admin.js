import React, { useState, useEffect } from "react";
import "./Admin.css";
import AccessControl from "../Components/Panels/AccessControl";

const PanelAdmin = () => {
  return (
    <>
      <div className="panel-bg">
        <AccessControl />
      </div>
    </>
  );
};

export default PanelAdmin;
