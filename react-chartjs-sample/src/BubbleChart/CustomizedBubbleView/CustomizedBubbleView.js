import React from 'react';
import {FormatNumber,RoundNumber} from "../../Utils";
import chartData from "./data";
import { Chart, Bubble } from "react-chartjs-2";
import zoom from "chartjs-plugin-zoom";

const CustomizedBubbleView = props => {
    return (
        <Bubble
                height={400}
                data={chartData}
                options={{
                  responsive: true,
                  height: 400,
                  maintainAspectRatio: false,
                  legend: { display: false },
                  layout: {
                    padding: 30,
                  },
                  tooltips: {
                    enabled: false,
                  },
                  elements:{
                    point: {
                      hoverRadius: 4,
                    },
                  },
                  pan: {
                    enabled: true,
                    mode: "xy",
                    onPan: function({chart}) { return false; },
                  },
                  zoom: {
                    enabled: true,
                    drag: false,
                    mode: "xy",
                    speed: 0.01,
                    threshold: 10,
                    sensitivity: 3,
                  },
                  scales: {
                    yAxes: [
                      {
                        gridLines: {
                          color: "#eee",
                          drawBorder: false,
                          lineWidth: 2,
                          zeroLineWidth: 2,
                          zeroLineColor: "#fff",
                        },
                        ticks: {
                          fontColor: "#888",
                          beginAtZero: false,
                          padding: 15,
                          stepSize: 10000,
                          fontSize: 9,
                          callback: (value, index) => {
                            return `$${FormatNumber(RoundNumber(value, 0.1))}`;
                          },
                        },
                      },
                    ],
                    xAxes: [
                      {
                        gridLines: {
                          color: "#eee",
                          drawBorder: false,
                          lineWidth: 2,
                          zeroLineWidth: 2,
                          zeroLineColor: "#fff",
                        },
                        ticks: {
                          fontColor: "#888",
                          beginAtZero: false,
                          padding: 15,
                          stepSize: 10000,
                          fontSize: 9,
                          callback: (value, index) => {
                            return `${FormatNumber(RoundNumber(value, 0))} kms`;
                          },
                        },
                      },
                    ],
                  }
                }}
              />
    );
};

export default CustomizedBubbleView;