import { useState } from "react";
import { useGet } from "../Utils/useAxios";
import closeicon from "../Assets/closeicon.svg";
import sun from "../Assets/weather/sun.svg";
import cloud from "../Assets/weather/cloud.svg";
import rain from "../Assets/weather/rain.svg";
import storm from "../Assets/weather/storm.svg";
import "./Weather.css";

const Weather = ({ handleBoo }) => {
  const handleChange = () => {
    handleBoo(false);
  };
  const [weat, isFetching, error] = useGet({ url: "/weather" });
  console.log(weat);
  return (
    <>
      {isFetching ? (
        <div className="weatherbox">
          <img
            onClick={handleChange}
            src={closeicon}
            className="closeIconModal"
          />
          <div className="cont-boxweather">
            <h1>Cargando...</h1>
          </div>
          <div className="blur-modal-clima"></div>
        </div>
      ) : (
        <div className="weatherbox">
          <img
            onClick={handleChange}
            src={closeicon}
            className="closeIconModal"
          />
          <div className="cont-boxweather">
            <h1>
              Clima en {weat.name}, {weat.sys.country}
            </h1>
            {iconResult(weat.weather[0].description)}
            <h1 className="grados-actual">
              {calcCelcius(weat.main.temp)}&deg;
            </h1>
            <p>{weat.weather[0].description}</p>
            <div className="line-div"></div>
            {minmaxTemp(
              calcCelcius(weat.main.temp_min),
              calcCelcius(weat.main.temp_max)
            )}
          </div>
          <div className="blur-modal-clima"></div>
        </div>
      )}
    </>
  );
};

const minmaxTemp = (min, max) => {
  return (
    <>
      <div className="temp-mm">
        <h3>
          <span>Mínima</span>
          <span className="temp1">{min}&deg;</span>
        </h3>
        <h3>
          <span>Máxima</span>
          <span className="temp1">{max}&deg;</span>
        </h3>
      </div>
    </>
  );
};

const calcCelcius = (temp) => {
  let celcius = Math.floor(temp - 273.15);
  return celcius;
};

const iconResult = (desc) => {
  switch (desc) {
    case "clear sky": {
      return <img src={sun} className="icon-weather" />;
    }
    case "few clouds" || "scattered clouds" || "broken clouds": {
      return <img src={cloud} className="icon-weather" />;
    }
    case "shower rain" || "rain": {
      return <img src={rain} className="icon-weather" />;
    }
    case "thunderstorm": {
      return <img src={storm} className="icon-weather" />;
    }
    default: {
      return <img src={sun} className="icon-weather" />;
    }
  }
};

export default Weather;
