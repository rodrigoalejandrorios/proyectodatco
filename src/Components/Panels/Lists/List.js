import { useState } from "react";
import { Link } from "react-router-dom";

const ListAC = ({ image, alt, cname, link, value }) => {
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <>
      <li>
        <form
          style={{ position: "absolute", zIndex: "1" }}
          onSubmit={handleSubmit}
        >
          <label className="checkone">
            <input
              className="checkbox-one"
              type="checkbox"
              defaultChecked={check}
              onChange={handleCheck}
            />
          </label>
        </form>
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

export default ListAC;
