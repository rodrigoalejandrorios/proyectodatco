import { useState } from "react";
import { useHistory } from "react-router-dom";
import useCustomForm from "../Utils/useForm";
import datcoiso from "../Assets/datcoiso.svg";
import datco from "../Assets/datco.svg";

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
      <div className="cont-all">
        <div className="cont-bg-login">
          <div className="cont-login">
            <form onSubmit={handleForm} className="form">
              <h1 className="title-form">Inicio de Sesión</h1>
              <p>Dirección de correo electronico</p>
              <input
                className="inputText"
                name="user"
                type="text"
                placeholder="example@example.com"
                value={values.user || ""}
                onChange={handler}
                required
              />
              <p>Contraseña</p>
              <input
                className="inputText"
                name="pass"
                type="password"
                placeholder="********"
                value={values.pass || ""}
                onChange={handler}
                required
              />

              <label className="check">
                <input className="checkbox" type="checkbox" /> Recordar Sesión
              </label>
              <button className="signin">Iniciar Sesión</button>
            </form>
          </div>
        </div>
        <div className="bg-gradient">
          <img className="iso" src={datco} />
        </div>
      </div>
    </>
  );
};

export default Login;
