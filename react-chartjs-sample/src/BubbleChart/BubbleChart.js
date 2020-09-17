import React from "react";
import CustomizedBubbleView from "./CustomizedBubbleView/CustomizedBubbleView";
import DefaultBubbleView from "./DefaultView/DefaultBubbleView";
import Legend from "./Legend/Legend";

const BubbleChart = (props) => {
  return (
    <div className="container">
      <br />
      <br />
      <h4 className="text-left">Default view</h4>
      <div className="chart-wrapper">
        <DefaultBubbleView/>
        </div>

      <h4 className="text-left">Customized view</h4>
      <Legend />
      <br/>
      <div className="chart-wrapper">
        <CustomizedBubbleView/>
      </div>
    </div>
  );
};

export default BubbleChart;
