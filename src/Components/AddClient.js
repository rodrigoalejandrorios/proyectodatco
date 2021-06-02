import React, { useState } from "react";
import useCustomForm from "../Utils/useForm";
import "./AddClient.css";
import closeicon from "../Assets/closeicon.svg";
const axios = require("axios");
const BASE_URL = "http://localhost:8000/";

const ModalAddClient = ({ handleModalClient, setPostuser }) => {
  const [values, handles, setValues] = useCustomForm({});
  //const [post, data, isFetching] = usePost();
  const [modaloff, setModaloff] = useState();

  const post = async (url, object) => {
    try {
      const { data } = await axios.post(url, object);
      setPostuser(data);
      setModaloff(false);
      handleModalClient(modaloff);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    setValues({});
    post(`${BASE_URL}users`, values);
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
              placeholder="Usernamme"
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
              placeholder="Endpoint name"
              value={values.endpoint || ""}
              onChange={handles}
              required
            />
            <p>Location</p>
            <input
              type="text"
              name="location"
              placeholder="Location name"
              value={values.location || ""}
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
