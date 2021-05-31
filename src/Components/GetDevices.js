import React from "react";
import { useGet } from "../Utils/useAxios";
import "./GetDevices.css";
import closeicon from "../Assets/closeicon.svg";

const GetDevices = ({ handleDeviceBoo }) => {
  const [device, isFetching, error] = useGet({ url: "/devices" });
  const { data } = device;
  console.log(data);
  const handleChange = () => {
    handleDeviceBoo(false);
  };
  return (
    <>
      {isFetching ? (
        <div className="devicebox">
          <div className="cont-boxdevice">
            <h1>Cargando...</h1>
          </div>
        </div>
      ) : (
        <div className="devicebox">
          <div className="cont-boxdevice">
            <div className="title-fecha">
              <h3>Entradas y salidas</h3>
              <h3>Fecha y hora</h3>
            </div>

            <div className="date-dispatch">
              <div className="cont-data">
                {data.map((info) => {
                  return <Data {...info} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Data = ({ seqNumber, time }) => {
  let timeconv = new Date(time);
  let timeformar = timeconv.toLocaleString();
  return (
    <>
      <div className="datadev">
        <p className="entradasalida">
          {seqNumber % 2 == 0 ? (
            <span key={seqNumber} className="spanpar">
              <div className="point-device"></div>Entradas
            </span>
          ) : (
            <span key={seqNumber} className="spanimpar">
              <div className="point-device-red"></div>Salidas
            </span>
          )}
        </p>
        <p className="fecha">
          <span>{timeformar}</span>
        </p>
      </div>
      <div className="f-hr">
        <div className="hr-dev"></div>
      </div>
    </>
  );
};

export default GetDevices;
