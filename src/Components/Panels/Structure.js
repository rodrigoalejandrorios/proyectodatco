//Estructura de datos para renderizar ITEMS

import dangericon from "../../Assets/dangericon.svg";
import warningicon from "../../Assets/warningicon.svg";
import personicon from "../../Assets/personicon.svg";
import nopersons from "../../Assets/nopersons.svg";
import tarjet from "../../Assets/tarjet.svg";
import settingsicon from "../../Assets/settingsicon.svg";
import chart from "../../Assets/chart.svg";
import llave from "../../Assets/llave.svg";
import chartbars from "../../Assets/chartbars.svg";
import cakechart from "../../Assets/cakechart.svg";

const structure = [
  {
    key: "item001",
    image: dangericon,
    alt: "dangericon",
    cname: null,
    link: "/dangerpanel",
    values: false,
  },
  {
    key: "item002",
    image: warningicon,
    alt: "warningicon",
    cname: null,
    link: "/warningpage",
    values: false,
  },
  {
    key: "item003",
    image: personicon,
    alt: "personicon",
    cname: null,
    link: "/personicon",
    values: false,
  },
  {
    key: "item004",
    image: nopersons,
    alt: "nopersons",
    cname: null,
    link: "/adelantos",
    values: false,
  },
  {
    key: "item005",
    image: tarjet,
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
