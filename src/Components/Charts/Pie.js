import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { fym, positive } from "./Data";

const PieModule = () => {
  return (
    <>
      <div className="box-pie">
        <h1>Aisaldos por sexo</h1>
        <BarChart width={250} height={250} data={fym}>
          <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="hombres" fill="#8884d8" />
          <Bar dataKey="mujeres" fill="#82ca9d" />
        </BarChart>
      </div>
    </>
  );
};

const PositivosReales = () => {
  return (
    <>
      <div className="box-pie">
        <h1>Positivos por sexo</h1>
        <BarChart width={250} height={250} data={positive}>
          <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="hombres" fill="#0860e4" />
          <Bar dataKey="mujeres" fill="#ff495b" />
        </BarChart>
      </div>
    </>
  );
};

export { PieModule, PositivosReales };
