import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useCustomForm from "../Utils/useForm";
import datco from "../Assets/smlogo.png";
import { v4 as uuidv4 } from "uuid";

import "./Login.css";

let session = uuidv4();

const Login = ({ handleBoolean }) => {
  const [values, handler, setValues] = useCustomForm();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    document.title = "Login | Grupo DATCO";
  }, []);

  let history = useHistory();

  const handleForm = (e) => {
    e.preventDefault();
    setValues({});
    console.log(values);
    if (values) {
      history.push("/");
      handleBoolean(true);
    }
  };

  const handleCheckbox = () => {
    setCheck(true);
  };

  if (check === true) {
    localStorage.setItem("Session", session);
  }

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
                <input
                  className="checkbox"
                  type="checkbox"
                  defaultChecked={check}
                  onChange={handleCheckbox}
                />{" "}
                Recordar Sesión
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
