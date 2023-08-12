import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
const SparkLine = ({ currentColor, color, id, type, width, height, data }) => {
  return (
    <div>
      <ResponsiveContainer width={width} height={height}>
        <LineChart width={width} height={height} data={data}>
          <Line type="linear" dataKey="yval" stroke={color} strokeWidth={1} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SparkLine;
