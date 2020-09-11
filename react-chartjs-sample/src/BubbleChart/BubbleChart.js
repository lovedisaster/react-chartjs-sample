import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import "./BubbleChart.scss";

const sampleData = (canvas) => {
  const ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(0, 0, 0, 150);
  gradient.addColorStop(0, "rgba(230,242,249,1)");
  gradient.addColorStop(1, "rgba(255,255,255,1)");

  const result = {
    labels: [0, 14, 59],
    datasets: [
      {
        backgroundColor: gradient,
        pointBackgroundColor: "#fff",
        data: [
          { x: 0, y: 20948 },
          { x: 14, y: 20092 },
          { x: 59, y: 20092 },
        ],
      },
    ],
  };
  return result;
};

const BubbleChart = (props) => {
  return (
    <div className="container">
      <br/>
      <br/>
      <br/>
      <br/>
      <h4 className="text-left">Default view</h4>
      <div className="line-chart__wrapper">
        <Line width={600} data={sampleData} type="line" />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h4 className="text-left">Custom view</h4>
      <div className="line-chart__wrapper">
        <Line
          width={600}
          data={sampleData}
          type="line"
          options={{
            legend: { display: false },
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: 20,
            },
            elements: {
              line: {
                cubicInterpolationMode: "monotone",
                tension: 1,
                borderWidth: 3,
                borderColor: "#007CC2",
                stepped: true,
                fill: "bottom",
              },
              point: {
                borderColor: "#027DC4",
                backgroundColor: "#fff",
                hoverBackgroundColor: "#fff",
                borderWidth: 2,
                radius: 5,
                hoverRadius: 7,
                hoverBorderWidth: 2,
              },
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    color: "#F7F7F7",
                    drawBorder: false,
                    lineWidth: 2,
                    zeroLineWidth: 2,
                    zeroLineColor: "#F7F7F7"
                  },
                  ticks: {
                    fontColor: "#888",
                    beginAtZero: false,
                    padding: 15,
                    stepSize: 500
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    color: "#F7F7F7",
                    drawBorder: false,
                    lineWidth: 2,
                    zeroLineWidth: 2,
                    zeroLineColor: "#F7F7F7",
                  },
                  ticks: {
                    fontColor: "#888",
                    beginAtZero: true,
                    padding: 15,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

BubbleChart.propTypes = {};

export default BubbleChart;
