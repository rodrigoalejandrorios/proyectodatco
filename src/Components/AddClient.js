import React, { useState } from "react";
import useCustomForm from "../Utils/useForm";
import { usePost } from "../Utils/useAxios";
import "./AddClient.css";
import closeicon from "../Assets/closeicon.svg";

const ModalAddClient = ({ handleModalClient }) => {
  const [values, handles, setValues] = useCustomForm({});
  const [postuser, respUser, fetchUser] = usePost();
  const [modaloff, setModaloff] = useState();

  const handleForm = (e) => {
    e.preventDefault();
    setValues({});
    postuser("users", values);
    console.log(respUser);
    if (fetchUser == false) {
      handleModalClient(modaloff);
    }
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
            <p>Name Username</p>
            <input
              type="text"
              name="username"
              placeholder="Name Username"
              value={values.username || ""}
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
