import React from 'react';
import { Line } from "react-chartjs-2";
import { FormatNumber } from '../../Utils';

const sampleData = (canvas) => {
    const ctx = canvas.getContext("2d");

    //1. Using gradient background. 
    let gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, "rgba(0, 124, 194, 0.1)");
    gradient.addColorStop(0.5, "rgba(0, 124, 194, 0.3)");
    gradient.addColorStop(1, "rgba(0, 124, 194, 0.7)");
  
    const result = {
      labels: [0, 14, 59, 79],
      datasets: [
        {
          backgroundColor: gradient,
          pointBackgroundColor: "#fff",
          data: [
            { x: 0, y: 20948 },
            { x: 14, y: 20092 },
            { x: 59, y: 19900 },
            { x: 79, y: 19900 },
          ],
        },
      ],
    };
    return result;
  };

const CustomizedView = props => {
    return (
        <Line
          width={600}
          height={200}
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
                    stepSize: 500,
                    callback: (value) => {
                      return `$${FormatNumber(value)}`
                    }
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
                    callback: (value) => {
                      return `${value} days`
                    }
                  },
                },
              ],
            },
          }}/>
    );
};

export default CustomizedView;