import { useState } from "react";
import "./AddItem.css";

const AddItem = ({ client, handleInfoitem }) => {
  const [additem, setAdditem] = useState({});

  const handleChange = (e) => {
    setAdditem({ ...additem, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleInfoitem(additem);
  };
  return (
    <>
      <div className="additem-cont">
        <h1>Alta de items para clientes</h1>
        <form onSubmit={handleSubmit} className="form-item">
          <label htmlFor="client"></label>
          <select value={additem.value} name="client" onChange={handleChange}>
            <option selected={true} disabled="disabled">
              Elegir cliente
            </option>
            {client.map((info) => {
              return (
                <option value={additem.client} key={info.id}>
                  {info.client}
                </option>
              );
            })}
          </select>
          <button>Add Item to Client</button>
        </form>
      </div>
    </>
  );
};

export default AddItem;
