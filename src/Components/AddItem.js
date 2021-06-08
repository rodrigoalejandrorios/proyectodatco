import { useState } from "react";
import { useGet } from "../Utils/useAxios";
import * as axios from "axios";
import load from "../Assets/load.svg";
import closeicon from "../Assets/closeicon.svg";
import "./AddItem.css";

const AddItem = ({ objStr, onadditem, handleAddItem }) => {
  const BASE_URL = "http://localhost:8000/users";
  const [additem, setAdditem] = useState({});
  const [user, isFetching, error] = useGet({ url: "/users" });

  const closeHandleAdd = () => {
    handleAddItem(false);
  };

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
      if (additem.value == cli.username) return updateData(cli.id);
    });
  };
  return (
    <>
      {onadditem ? (
        <div className="additem-cont">
          <div className="rela-add">
            <div className="close-icon">
              <img src={closeicon} onClick={closeHandleAdd} />
            </div>
            <h1>Alta de items para clientes</h1>
            <form onSubmit={handleSubmit} className="form-item">
              <div className="select">
                <select
                  value={additem.value}
                  name="client"
                  onChange={handleChange}
                  required
                >
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
              </div>
              <div className="btn-item">
                <Btn />
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

const Btn = () => {
  const [click, setClick] = useState(false);
  const clickFun = () => {
    setTimeout(() => {
      setClick(false);
      window.location.reload();
    }, 1500);
    setClick(true);
  };
  return (
    <>
      {click ? (
        <button className="active-btn-add">
          <img src={load} />
        </button>
      ) : (
        <button onClick={clickFun}>Agregar items a clientes</button>
      )}
    </>
  );
};

export default AddItem;
