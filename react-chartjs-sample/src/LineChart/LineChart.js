import React from "react";
import "./LineChart.scss";
import DefaultView from "../LineChart/DefaultView/DefaultView";
import CustomizedView from "../LineChart/CustomizedView/CustomizedView";

const LineChart = (props) => {
  return (
    <div className="container">
      <br/>
      <br/>
      <h4 className="text-left">Default view</h4>
      <div className="line-chart__wrapper">
        <DefaultView/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h4 className="text-left">Custom view</h4>
      <div className="line-chart__wrapper">
        <CustomizedView/>
      </div>
    </div>
  );
};

export default LineChart;
