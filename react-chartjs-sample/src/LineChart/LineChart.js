import React from "react";
import "./LineChart.scss";
import DefaultView from "../LineChart/DefaultView/DefaultView";
import CustomizedView from "../LineChart/CustomizedView/CustomizedView";
import ComstomizedTooltips from "./CustomizedView/CustomTooltips/ComstomizedTooltips";

const LineChart = (props) => {
  return (
    <div className="container">
      <br/>
      <br/>
      <h4 className="text-left">Default view</h4>
      <div className="chart-wrapper">
        <DefaultView/>
      </div>

      <h4 className="text-left">Custom view</h4>
      <div className="chart-wrapper">
        <CustomizedView/>
      </div>

      <h4 className="text-left">Custom tooltips</h4>
      <div className="chart-wrapper">
        <ComstomizedTooltips/>
      </div>
    </div>
  );
};

export default LineChart;
