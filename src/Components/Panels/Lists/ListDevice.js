import { useState } from "react";
import "./ListCLI.css";

const ListDevice = ({ handleDeviceBoo, image, alt, cname }) => {
  const handleChange = () => {
    handleDeviceBoo(true);
  };
  return (
    <>
      <li className="li-list-cli" onClick={handleChange}>
        <div className="cont-list-cli">
          <img className={cname} src={image} alt={alt} />
        </div>
      </li>
    </>
  );
};

export default ListDevice;
