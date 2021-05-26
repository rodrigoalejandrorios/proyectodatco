import React from "react";
import { useGet } from "../Utils/useAxios";
import "./GetDevices.css";
import closeicon from "../Assets/closeicon.svg";

const GetDevices = ({ handleDeviceBoo }) => {
  const [device, isFetching, error] = useGet({ url: "/devices" });
  console.log(device);
  const handleChange = () => {
    handleDeviceBoo(false);
  };
  return (
    <>
      {isFetching ? (
        <div className="devicebox">
          <img
            onClick={handleChange}
            src={closeicon}
            className="closeIconModal"
          />
          <div className="cont-boxdevice">
            <h1>Cargando...</h1>
          </div>
          <div className="blur-modal-device"></div>
        </div>
      ) : (
        <div className="devicebox">
          <img
            onClick={handleChange}
            src={closeicon}
            className="closeIconModal"
          />
          <div className="cont-boxdevice">
            {device.map((info) => {
              {
                Data(info.time, info.data);
              }
            })}
          </div>
          <div className="blur-modal-device"></div>
        </div>
      )}
    </>
  );
};

const Data = (time, data) => {
  <h3>
    <span className="">{time}</span>
    <span className="">{data}</span>
  </h3>;
};

export default GetDevices;
