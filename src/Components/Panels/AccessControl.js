import { useState, useRef, useEffect } from "react";
import "./AccessControl.css";
import structure from "./Structure";
import ListAC from "./Lists/List";

const AccessControl = ({ objStr, setObjStr }) => {
  // [client, isFetching, error] = useGet({ url: "/users" });
  const toggleItem = (id) => {
    console.log(`Ejecutando el ${id}`);
    setObjStr(
      objStr.map((obj) => {
        if (obj.key === id) {
          return { ...obj, values: true };
        }
        return obj;
      })
    );
  };
  return (
    <>
      <div className="control-panel">
        <div className="panel-ac"></div>
        <div className="title-ac">
          <h1>Access Control</h1>
        </div>
        <div className="cont-item-ac">
          <ul className="ul-item">
            {objStr.slice(0, 6).map((info) => {
              return (
                <ListAC
                  info={info}
                  toggleItem={toggleItem}
                  key={info.key}
                  image={info.image}
                  alt={info.alt}
                  link={info.link}
                  getvalue={info.value}
                />
              );
            })}
          </ul>
        </div>
        <div className="segunda-fila">
          <ul>
            {structure.slice(6, 9).map((info) => {
              return (
                <ListAC
                  info={info}
                  toggleItem={toggleItem}
                  key={info.key}
                  image={info.image}
                  alt={info.alt}
                  link={info.link}
                  cname={info.cname}
                  value={info.value}
                />
              );
            })}
          </ul>
        </div>
        <div className="tercer-fila">
          <ul>
            {structure.slice(9, 11).map((info) => {
              return (
                <ListAC
                  info={info}
                  toggleItem={toggleItem}
                  key={info.key}
                  image={info.image}
                  alt={info.alt}
                  link={info.link}
                  cname={info.cname}
                  value={info.value}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccessControl;
