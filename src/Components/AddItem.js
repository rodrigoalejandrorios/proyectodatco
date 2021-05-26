import { useState } from "react";
import { useGet } from "../Utils/useAxios";
import "./AddItem.css";

const AddItem = ({ client, handleInfoitem, setGetItem }) => {
  const [additem, setAdditem] = useState({});
  const [user, isFetching, error] = useGet({ url: "/users" });

  const handleChange = (e) => {
    setAdditem({ ...additem, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (additem.value) {
      handleInfoitem(additem.value);
      setGetItem(additem.value);
      client.map((cli) => {
        if (cli.client == additem.value) {
          cli.getItem = additem.value;
        }
      });
    } else {
      console.log("No hay cliente");
    }
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
            {user.map((info) => {
              return (
                <option value={additem.client} key={info.id}>
                  {info.username}
                </option>
              );
            })}
          </select>

          <button>Agregar items a clientes</button>
        </form>
      </div>
    </>
  );
};

export default AddItem;
