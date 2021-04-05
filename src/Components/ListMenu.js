import React from "react";
import "./ListMenu.css";
import datco from "../Assets/datco.svg";
import closeicon from "../Assets/closeicon.svg";

const clicktrue = {
  transition: "all 0.5s ease-in-out",
  left: 0,
};

const clickfalse = {
  transition: "all 0.5s ease-in-out",
  left: "-100%",
};

const ListMenu = ({ handleMenuAction, menu }) => {
  const handleCloseMenuAction = () => {
    handleMenuAction(false);
  };
  return (
    <>
      {menu ? (
        <div>
          <div className="cont-listmenu" style={clicktrue}>
            <div className="cont-icons">
              <img
                onClick={handleCloseMenuAction}
                className="closeicon"
                src={closeicon}
              />
              <img className="logoDatco" src={datco} />
            </div>
            <ul className="list">
              <li>Admin</li>
              <li>Client 1</li>
              <li>Client 2</li>
              <li>Client 3</li>
              <button> + Add Client</button>
            </ul>
          </div>
          <div className="blur"></div>
        </div>
      ) : (
        <div>
          <div className="cont-listmenu" style={clickfalse}>
            <div className="cont-icons">
              <img className="closeicon" src={closeicon} />
              <img className="logoDatco" src={datco} />
            </div>
            <ul className="list">
              <li>Admin</li>
              <li>Client 1</li>
              <li>Client 2</li>
              <li>Client 3</li>
              <button> + Add Client</button>
            </ul>
          </div>
          <div className="blur-none"></div>
        </div>
      )}
    </>
  );
};

export default ListMenu;
