import React from "react";
import { AgChartsReact } from "ag-charts-react";
import { options } from "../../data/Data";

const LineChart = () => {
  return <AgChartsReact options={options}   />;
};

export default LineChart;
