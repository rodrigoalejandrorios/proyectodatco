import { useState } from "react";
import { useGet } from "../Utils/useAxios";
import * as axios from "axios";
import "./AddItem.css";

const AddItem = ({ client, handleInfoitem, setGetItem, objStr }) => {
  const BASE_URL = "http://localhost:8000/users";
  const [additem, setAdditem] = useState({});
  const [user, isFetching, error] = useGet({ url: "/users" });
  console.log(objStr[0].values);

  const object = {
    role: 0,
    item1: objStr[0].values,
    item2: objStr[1].values,
    item3: objStr[2].values,
    item4: objStr[3].values,
    item5: objStr[4].values,
  };
  const updateData = (id) => {
    axios
      .put(`${BASE_URL}/${id}`, object)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setAdditem({ ...additem, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    user.map((cli) => {
      updateData(cli.id);
    });
    window.location.reload();
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
