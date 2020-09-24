import React from 'react';
import thisCar from "../CustomizedBubbleView/car.svg";
import privateCars from "./Private.svg";
import dealerCars from "./Dealer.svg";
import delistedCars from "./Delisted.svg";
import optionsCars from "./Options.svg";
import "./Legend.scss";

const AllIndicatorTypes = {
    THIS: "this",
    PRIVATE: "private",
    DEALER: "dealer",
    DELISTED: "delisted",
    OPTIONS: "options",
}

let FullIndicators = [
    {
        type: AllIndicatorTypes.THIS,
        text: "This car",
        icon: thisCar,
        isActive: false
    },
    {
        type: AllIndicatorTypes.PRIVATE,
        text: "Private cars",
        icon: privateCars,
        isActive: false
    },
    {
        type: AllIndicatorTypes.DEALER,
        text: "Dealer cars",
        icon: dealerCars,
        isActive: false
    },
    {
        type: AllIndicatorTypes.DELISTED,
        text: "Delisted cars",
        icon: delistedCars,
        isActive: false
    },
    {
        type: AllIndicatorTypes.OPTIONS,
        text: "Has added options",
        icon: optionsCars,
        isActive: false
    },
]

const Legend = props => {
    const indicators = FullIndicators;
    
    return (
        <div className="bubble-chart__legend-outter">
            <div className="bubble-chart__legend-inner">
                {
                    indicators.map(item => 
                        <div className="bubble-chart__legend-item" key={item.text} active={item.active}>
                            <img alt={item.text} src={item.icon}/>
                            <span>{item.text}</span>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Legend;