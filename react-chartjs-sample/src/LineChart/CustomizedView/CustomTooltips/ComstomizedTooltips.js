import React from "react";
import { Line } from "react-chartjs-2";
import { FormatDate } from "../../../Utils";
import "./Tooltips.scss";
import DateSVG from "./Date_icn@2x.svg";
import IncreaseSVG from "./PriceIncrease_icn@2x.svg";
import DecreaseSVG from "./PriceDecrease_icn@2x.svg";
import { IsEmptyValue, FormatNumber } from "../../../Utils";

const rawData = [
  {
    x: 0,
    y: 30990,
    r: 4,
    toolTipsData: {
      trend: { compareToPre: "No change", diff: 0 },
      updatedOn: "2020-08-14T10:00:00",
    },
  },
  {
    x: 21,
    y: 29990,
    r: 4,
    toolTipsData: {
      trend: { compareToPre: "Price decrease", diff: -1000 },
      updatedOn: "2020-09-04T12:39:39.9",
    },
  },
  {
    x: 31,
    y: 29990,
    r: 4,
    toolTipsData: {
      trend: { compareToPre: "No change", diff: 0 },
      updatedOn: "2020-09-13T17:09:46.469412",
    },
  },
];

const sampleData = (canvas) => {
  const ctx = canvas.getContext("2d");

  //1. Using gradient background.
  let gradient = ctx.createLinearGradient(0, 0, 0, 150);
  gradient.addColorStop(0, "rgba(0, 124, 194, 0.1)");
  gradient.addColorStop(0.5, "rgba(0, 124, 194, 0.3)");
  gradient.addColorStop(1, "rgba(0, 124, 194, 0.7)");

  const result = {
    labels: rawData.map((item) => {
      return item.x;
    }),
    datasets: [
      {
        backgroundColor: gradient,
        pointBackgroundColor: "#fff",
        data: rawData.map((item) => {
          return {
            x: item.x,
            y: item.y,
          };
        }),
      },
    ],
  };
  return result;
};

const customTooltips = function (tooltip) {
  if (!tooltip) {
    return;
  }
  // Tooltip Element
  let tooltipEl = document.getElementById("chartjs-tooltip");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "chartjs-tooltip";
    document.body.appendChild(tooltipEl);
  }

  // Set caret Position
  tooltipEl.classList.remove("above", "below", "no-transform");
  if (tooltip.yAlign) {
    tooltipEl.classList.add(tooltip.yAlign);
  } else {
    tooltipEl.classList.add("no-transform");
  }
  const getBody = (bodyItem) => bodyItem.lines;

  //Hide the tooltips when mouseout
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set custom tooltip
  if (tooltip.body) {
    // const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map(getBody);
    const tooltipData = bodyLines[0][0].rawDataItem;

    const TrendSVGDict = {
      "Price decrease": DecreaseSVG,
      "Price increase": IncreaseSVG,
    };

    let innerHtml = "<div class='arrow_box'><ul>";
    const tooltipTitle = `<li key="title" class="tooltip-title">${tooltipData.x} days</li>`;
    const tooltipValue = IsEmptyValue(
      tooltipData.toolTipsData.trend.compareToPre
    )
      ? // &&
        // TrendSVGDict.hasOwnProperty(tooltipData.toolTipsData.trend.compareToPre)
        "<li></li>"
      : tooltipData.toolTipsData.trend.diff < 0 //decreasing
      ? `<li class='green' key="value" class="tooltip-value"><img src="${
          TrendSVGDict[tooltipData.toolTipsData.trend.compareToPre]
        }"/>${tooltipData.toolTipsData.trend.compareToPre}</li>`
      : tooltipData.toolTipsData.trend.diff > 0 //increasing
      ? `<li class='red' key="value" class="tooltip-value"><img src="${
          TrendSVGDict[tooltipData.toolTipsData.trend.compareToPre]
        }"/>${tooltipData.toolTipsData.trend.compareToPre}</li>`
      : //equal
        `<li class='black' key="value" class="tooltip-value">${tooltipData.toolTipsData.trend.compareToPre}</li>`;
    const tooltipFooter = `<li key="footer" class="tooltip-footer"><img src="${DateSVG}"/>${FormatDate(
      tooltipData.toolTipsData.updatedOn
    )}</li>`;
    innerHtml += tooltipTitle;
    !IsEmptyValue(tooltipData.toolTipsData.trend.compareToPre) &&
      (innerHtml += tooltipValue);

    innerHtml += tooltipFooter;
    innerHtml += "</ul></div>";

    // Set inner html to tooltip
    tooltipEl.innerHTML = innerHtml;
    var chartElement = this._chart.canvas.getBoundingClientRect();
    // Calculate position
    const positionY = chartElement.top + tooltip.yPadding;
    const positionX = chartElement.left + tooltip.xPadding;
    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + "px";
    tooltipEl.style.top = positionY + tooltip.caretY + 10 + "px";
  }
};

const ComstomizedTooltips = (props) => {
  return (
    <Line
      width={600}
      height={250}
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
                zeroLineColor: "#F7F7F7",
              },
              ticks: {
                fontColor: "#888",
                beginAtZero: false,
                padding: 15,
                stepSize: 500,
                callback: (value) => {
                  return `$${FormatNumber(value)}`;
                },
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
                  return `${value} days`;
                },
              },
            },
          ],
        },
        tooltips: {
          enabled: false,
          custom: customTooltips,
          callbacks: {
            label: (tooltipItem, data) => {
              const rawDataItem = rawData.find(
                (item) => item.x === tooltipItem.xLabel
              );
              return {
                label: tooltipItem.xLabel,
                rawDataItem: rawDataItem,
              };
            },
          },
        },
      }}
    />
  );
};

export default ComstomizedTooltips;
