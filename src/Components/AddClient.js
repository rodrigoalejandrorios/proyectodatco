import React, { useState } from "react";
import useCustomForm from "../Utils/useForm";
import "./AddClient.css";
import closeicon from "../Assets/closeicon.svg";
import { v4 as uuidv4 } from "uuid";

const ModalAddClient = ({ handleModalClient, client, setClient, endpoint }) => {
  const [values, handles, setValues] = useCustomForm({});
  const [modaloff, setModaloff] = useState();

  const handleForm = (e) => {
    e.preventDefault();
    setValues({});
    endpoint.push(values);
    setClient([...client, values]);
    client.push((values.id = uuidv4()));
    client.push((values.getItem = ""));
    handleModalClient(modaloff);
  };

  const handleOff = () => {
    setModaloff(false);
    handleModalClient(modaloff);
  };
  return (
    <>
      <div className="cont-modal">
        <img onClick={handleOff} src={closeicon} className="closeIconModal" />
        <div className="box-modal">
          <form onSubmit={handleForm}>
            <p>Name Client</p>
            <input
              type="text"
              name="client"
              placeholder="Name Client"
              value={values.client || ""}
              onChange={handles}
              required
            />
            <p>Email Client</p>
            <input
              type="text"
              name="email"
              placeholder="example@example.com"
              value={values.email || ""}
              onChange={handles}
              required
            />
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="*******"
              value={values.password || ""}
              onChange={handles}
              required
            />
            <p>Endpoint</p>
            <input
              type="text"
              name="endpoint"
              placeholder="Name of endpoint"
              value={values.endpoint || ""}
              onChange={handles}
              required
            />
            <button type="submit">Create a Client</button>
          </form>
        </div>
        <div className="blur-modal"></div>
      </div>
    </>
  );
};

export default ModalAddClient;
