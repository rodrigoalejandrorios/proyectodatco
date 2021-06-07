import React from "react";

const PanelCCTV = () => {
  return (
    <>
      <div className="cctv-panel">
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
    </>
  );
};

export default PanelCCTV;
