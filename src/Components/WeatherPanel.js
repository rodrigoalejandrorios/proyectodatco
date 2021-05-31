import { useState } from "react";
import { useGet } from "../Utils/useAxios";
import reload from "../Assets/reload.svg";
import sun from "../Assets/weather/sun.svg";
import cloud from "../Assets/weather/cloud.svg";
import rain from "../Assets/weather/rain.svg";
import storm from "../Assets/weather/storm.svg";

import "./WeatherPanel.css";

const WeatherPanel = () => {
  const [weat, isFetching, setFetching, get, error] = useGet({
    url: "/weather",
  });
  const handleChange = () => {
    setTimeout(() => {
      setFetching(false);
      get();
    }, 2000);
    setFetching(true);
  };
  console.log(weat);
  return (
    <>
      {isFetching ? (
        <div className="weatherboxp">
          <div className="cont-boxweatherp">
            <h1 className="fetch">Cargando...</h1>
          </div>
        </div>
      ) : (
        <div className="weatherboxp">
          <div className="cont-boxweatherp">
            <h1 className="lugar">
              Clima en {weat.name}, {weat.sys.country}
            </h1>
            <div className="part-data-w">
              {iconResult(weat.weather[0].description)}
              <h1 className="grados-actual">
                {calcCelcius(weat.main.temp)}&deg;
              </h1>
            </div>
            <p>{weat.weather[0].description}</p>
            <div className="line-div"></div>
            {minmaxTemp(
              calcCelcius(weat.main.temp_min),
              calcCelcius(weat.main.temp_max)
            )}
            <div className="refresh" onClick={handleChange}>
              <img src={reload} />
            </div>
          </div>
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
    case "clear sky":
      return <img src={sun} className="icon-weather" />;

    case "few clouds":
    case "scattered clouds":
    case "overcast clouds":
    case "broken clouds":
      return <img src={cloud} className="icon-weather" />;

    case "shower rain":
    case "rain":
      return <img src={rain} className="icon-weather" />;

    case "thunderstorm":
      return <img src={storm} className="icon-weather" />;

    default: {
      return <img src={sun} className="icon-weather" />;
    }
  }
};

export default WeatherPanel;
