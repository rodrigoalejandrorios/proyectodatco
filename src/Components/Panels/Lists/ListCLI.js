import { useState } from "react";
import { Link } from "react-router-dom";

const ListCLI = ({ image, alt, cname, link }) => {
  return (
    <>
      <li>
        <Link to={link}>
          <div
            style={{
              width: "100%",
              position: "relative",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img className={cname} src={image} alt={alt} />
          </div>
        </Link>
      </li>
    </>
  );
};

export default ListCLI;
