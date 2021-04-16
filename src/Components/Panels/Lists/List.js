import { useState } from "react";

const ListAC = ({ image, alt, cname }) => {
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
        <form onSubmit={handleSubmit}>
          <label className="checkone">
            <input
              className="checkbox-one"
              type="checkbox"
              defaultChecked={check}
              onChange={handleCheck}
            />
          </label>
        </form>
        <img className={cname} src={image} alt={alt} />
      </li>
    </>
  );
};

export default ListAC;
