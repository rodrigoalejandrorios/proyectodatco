import { useState } from "react";
import { useHistory } from "react-router-dom";
import useCustomForm from "../Utils/useForm";

import "./Login.css";

const Login = ({ handleBoolean }) => {
  const [values, handler, setValues] = useCustomForm();

  let history = useHistory();

  const handleForm = (e) => {
    e.preventDefault();
    setValues({});
    if (values) {
      history.push("/");
      handleBoolean(true);
    }
  };

  return (
    <>
      <div className="cont-bg-login">
        <div className="cont-login">
          <form onSubmit={handleForm} className="form">
            <h1 className="title-form">Log In</h1>
            <input
              className="inputText"
              name="user"
              type="text"
              placeholder="Username"
              value={values.user}
              onChange={handler}
              required
            />
            <input
              className="inputText"
              name="pass"
              type="password"
              placeholder="Password"
              value={values.pass}
              onChange={handler}
              required
            />

            <label className="check">
              <input className="checkbox" type="checkbox" /> Remember me
            </label>
            <button className="signin">Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
