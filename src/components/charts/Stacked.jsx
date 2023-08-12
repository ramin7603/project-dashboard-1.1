import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Stacked = ({ width, height }) => {
  const data = [
    {
      name: "P - A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "P - B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "P - C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "P-D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "P - E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  return (
    <div>
      <ResponsiveContainer width={width} height={height}>
        <BarChart
          width={width}
          height={height}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />

          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#078b78" />
          <Bar dataKey="uv" stackId="a" fill="#021021" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stacked;
