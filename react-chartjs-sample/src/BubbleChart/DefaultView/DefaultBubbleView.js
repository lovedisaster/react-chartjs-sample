import React from 'react';
import { Chart, Bubble } from "react-chartjs-2";
import chartData from "./data";

const DefaultBubbleView = props => {
    return (
        <Bubble
            height={400}
            data={chartData}
            options={{
                maintainAspectRatio: false
            }
            }
        />
    );
};


export default DefaultBubbleView;