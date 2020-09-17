import car from "./car.svg";
import delisted from "./Delisted.svg";
import options from "./Options.svg";
import privateDelistedOption from "./Dealer-Delisted-Options.svg";
import privateDelisted from "./Private-Delisted.svg";
import privateOptions from "./Private-Options.svg";
import dealerDelistedOptions from "./Dealer-Delisted-Options.svg";
import dealerDelisted from "./Dealer-Delisted.svg";
import dealerOptions from "./Dealer-Options.svg";

let carElement = document.createElement("img");
carElement.setAttribute("src",car);

let delistedElement = document.createElement("img");
delistedElement.setAttribute("src",delisted);

let optionsElement = document.createElement("img");
optionsElement.setAttribute("src",options);

let privateDelistedOptionElement = document.createElement("img");
privateDelistedOptionElement.setAttribute("src",privateDelistedOption);

let privateDelistedElement = document.createElement("img");
privateDelistedElement.setAttribute("src",privateDelisted);

let privateOptionsElement = document.createElement("img");
privateOptionsElement.setAttribute("src",privateOptions);

let dealerDelistedOptionsElement = document.createElement("img");
dealerDelistedOptionsElement.setAttribute("src",dealerDelistedOptions);

let dealerDelistedElement = document.createElement("img");
dealerDelistedElement.setAttribute("src",dealerDelisted);

let dealerOptionsElement = document.createElement("img");
dealerOptionsElement.setAttribute("src",dealerOptions);


export default {
    labels: [
      "SSE-AD-6569639",
      "OAG-AD-18785690",
      "SSE-AD-6813092",
      "OAG-AD-18590660",
      "SSE-AD-6752791",
      "OAG-AD-18735364",
      "SSE-AD-6813364",
      "SSE-AD-6771336",
      "SSE-AD-6812264",
    ],
    datasets: [
      {
        data: [{ r: 5, x: 28200, y: 29990 }],
        borderCapStyle: "round",
        borderWidth: 1,
        borderColor: "#272E62",
        borderDashOffset: 0,
        backgroundColor: "#5862AC",
        fill: true,
        pointStyle: carElement,
        label: "SSE-AD-6569639",
      },
      {
        data: [{ r: 5, x: 29753, y: 29990 }],
        borderCapStyle: "round",
        borderWidth: 1,
        borderColor: "#FF7B00",
        borderDashOffset: 0,
        backgroundColor: "#FFB100",
        fill: true,
        pointStyle: delistedElement,
        label: "OAG-AD-18785690",
      },
      {
        data: [{ r: 5, x: 30000, y: 35000 }],
        borderCapStyle: "round",
        borderWidth: 1,
        borderColor: "#272E62",
        borderDashOffset: 0,
        backgroundColor: "#5862AC",
        fill: true,
        pointStyle: optionsElement,
        label: "SSE-AD-6813092",
      },
      {
        data: [{ r: 5, x: 39065, y: 32888 }],
        borderCapStyle: "round",
        borderWidth: 1,
        borderColor: "#FF7B00",
        borderDashOffset: 0,
        backgroundColor: "#FFB100",
        fill: true,
        pointStyle: privateDelistedOptionElement,
        label: "OAG-AD-18590660",
      },
      {
        data: [{ r: 5, x: 39519, y: 32490 }],
        borderCapStyle: "round",
        borderWidth: 1,
        borderColor: "#272E62",
        borderDashOffset: 0,
        backgroundColor: "#5862AC",
        fill: true,
        pointStyle: privateDelistedElement,
        label: "SSE-AD-6752791",
      },
      {
        data: [{ r: 5, x: 55504, y: 26805 }],
        borderCapStyle: "round",
        borderWidth: 1,
        borderColor: "#FF7B00",
        borderDashOffset: 0,
        backgroundColor: "#FFB100",
        fill: true,
        pointStyle: privateOptionsElement,
        label: "OAG-AD-18735364",
      },
      {
        data: [{ r: 5, x: 53504, y: 26505 }],
        borderCapStyle: "round",
        borderWidth: 1,
        borderColor: "#FF7B00",
        borderDashOffset: 0,
        backgroundColor: "#FFB100",
        fill: true,
        pointStyle: dealerDelistedElement,
        label: "OAG-AD-18735364",
      },
      {
        data: [{ r: 5, x: 55204, y: 31805 }],
        borderCapStyle: "round",
        borderWidth: 1,
        borderColor: "#FF7B00",
        borderDashOffset: 0,
        backgroundColor: "#FFB100",
        fill: true,
        pointStyle: dealerOptionsElement,
        label: "OAG-AD-18735364",
      },
      {
        data: [{ r: 5, x: 56000, y: 25990 }],
        borderCapStyle: "round",
        borderWidth: 1,
        borderColor: "#272E62",
        borderDashOffset: 0,
        backgroundColor: "#5862AC",
        fill: true,
        pointStyle: dealerDelistedOptionsElement,
        label: "SSE-AD-6813364",
      },
    ],
  };

