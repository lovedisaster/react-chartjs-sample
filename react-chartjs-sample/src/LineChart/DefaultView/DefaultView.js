import React from 'react';
import { Line } from "react-chartjs-2";

const sampleData = {
    labels: [0, 14, 59, 79],
    datasets: [
      {
        pointBackgroundColor: "#fff",
        data: [
          { x: 0, y: 20948 },
          { x: 14, y: 20092 },
          { x: 59, y: 19900 },
          { x: 79, y: 19900 }
        ],
      },
    ],
  };

const DefaultView = props => {
    return (
        <Line width={600} data={sampleData} type="line" />
    );
};

export default DefaultView;