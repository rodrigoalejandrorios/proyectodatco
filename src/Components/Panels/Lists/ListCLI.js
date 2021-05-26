import { useState } from "react";
import { Link } from "react-router-dom";
import "./ListCLI.css";

const ListCLI = ({ handleBoo, image, alt, cname, link }) => {
  const handleChange = () => {
    handleBoo(true);
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

export default ListCLI;
