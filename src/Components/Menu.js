import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Menu.css";

//Images and SVG's archives
import downicon from "../Assets/downicon.svg";
import profileicon from "../Assets/profileicon.svg";
import hambicon from "../Assets/hambicon.svg";
import datco from "../Assets/datco.svg";
import logout from "../Assets/logout.svg";
import clip from "../Assets/clip.svg";

const Menu = ({ handleMenuAction, handleAccess }) => {
  const [usermenu, setUsermenu] = useState(false);

  const handleStateMenu = () => {
    handleMenuAction(true);
  };

  const handleUserMenu = () => {
    if (!usermenu) {
      setUsermenu(true);
    } else {
      setUsermenu(false);
    }
  };
  let history = useHistory();
  const handleSignOut = () => {
    handleAccess(false);
    history.push("/auth");
  };

  return (
    <>
      <div className="cont-menu">
        <div className="cont-left">
          <img onClick={handleStateMenu} className="hambicon" src={hambicon} />
          <img className="datcoicon" src={datco} />
        </div>
        <div className="cont-right" onClick={handleUserMenu}>
          <img className="downicon" src={downicon} />
          <img className="profileicon" src={profileicon} />
          {usermenu ? (
            <div className="toggleuser">
              <img src={clip} />
              <ul className="box-user">
                <li>My Profile</li>
                <li>Settings</li>
                <hr />
                <li onClick={handleSignOut} className="logout">
                  <img src={logout} />
                  Log Out
                </li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
