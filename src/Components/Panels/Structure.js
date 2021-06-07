//Estructura de datos para renderizar ITEMS

import cameraseg from "../../Assets/cameraseg.svg";
import cloud from "../../Assets/weather/rain-w.svg";
import personicon from "../../Assets/personicon.svg";
import covid from "../../Assets/covid.svg";
import tarjet from "../../Assets/tarjet.svg";
import settingsicon from "../../Assets/settingsicon.svg";
import chart from "../../Assets/chart.svg";
import llave from "../../Assets/llave.svg";
import chartbars from "../../Assets/chartbars.svg";
import cakechart from "../../Assets/cakechart.svg";

const structure = [
  {
    key: 1,
    image: cameraseg,
    alt: "cameraseg",
    cname: null,
    link: "/camera",
    values: false,
  },
  {
    key: 2,
    image: cloud,
    alt: "warningicon",
    cname: null,
    link: "/warningpage",
    values: false,
  },
  {
    key: 3,
    image: personicon,
    alt: "personicon",
    cname: null,
    link: "/personicon",
    values: false,
  },
  {
    key: 4,
    image: tarjet,
    alt: "nopersons",
    cname: null,
    link: "/adelantos",
    values: false,
  },
  {
    key: 5,
    image: covid,
    alt: "tarjet",
    cname: null,
    link: "/marcadores",
    values: false,
  },
  {
    key: "item006",
    image: settingsicon,
    alt: "settingsicon",
    cname: null,
    link: "/settings-tools",
    values: false,
  },
  {
    key: "item007",
    image: chart,
    alt: "chart",
    cname: "chartline",
    link: "/chartline",
    values: false,
  },
  {
    key: "item008",
    image: llave,
    alt: "llave",
    cname: "llave",
    link: "/ingresos",
    values: false,
  },
  {
    key: "item009",
    image: personicon,
    alt: "personicon",
    cname: "person",
    link: "/asistencia",
    values: false,
  },
  {
    key: "item010",
    image: chartbars,
    alt: "chartbars",
    cname: null,
    link: "/informes",
    values: false,
  },
  {
    key: "item011",
    image: cakechart,
    alt: "cakechart",
    cname: null,
    link: "/comparaciones",
    values: false,
  },
];

export default structure;
