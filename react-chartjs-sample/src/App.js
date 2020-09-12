import React, {useState} from 'react';
import './App.scss';
import LineChart from './LineChart/LineChart';
import BubbleChart from './BubbleChart/BubbleChart';
import Header from './Header/Header';

export const CHARTTYPES = {
  LINE : "line",
  BUBBLE : "bubble"
}

const App = () => {
  let [activeChart, setActiveChart] = useState("bubble");

  return (
    <div className="App">
      <Header activeChart={activeChart} setActiveChart={setActiveChart}/>
      <div className="container">
        {
          activeChart === CHARTTYPES.LINE && <LineChart/>
        }
        {
          activeChart === CHARTTYPES.BUBBLE && <BubbleChart/>
        }
      </div>
    </div>
  );
}

export default App;
