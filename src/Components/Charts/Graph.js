import React from "react";
import "./Graph.css";
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
} from "recharts";
import { datagraph } from "./Data";

const GraphOne = () => {
  return (
    <>
      <div className="box-graph">
        <h1>Aislados por posible Covid-19</h1>
        <AreaChart
          width={650}
          height={250}
          data={datagraph}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff495b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff495b" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="casos"
            stroke="#ff495b"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
    </>
  );
};

export default GraphOne;
