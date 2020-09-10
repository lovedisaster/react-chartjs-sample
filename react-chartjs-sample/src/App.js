import React, {useState} from 'react';
import './App.scss';

const CHARTTYPES = {
  LINE : "line",
  BUBBLE : "bubble"
}

const App = () => {
  let [activeChart, setActiveChart] = useState("bubble");

  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <ul className="nav">
            <li onClick={() => setActiveChart(CHARTTYPES.LINE)} className={activeChart === CHARTTYPES.LINE ? "active" : ""}>Line chart</li>
            <li onClick={() => setActiveChart(CHARTTYPES.BUBBLE)} className={activeChart === CHARTTYPES.BUBBLE ? "active" : ""}>Bubble chart</li>
          </ul>
        </div>
      </div>
      {
        activeChart === CHARTTYPES.LINE && <div className="line-chart__wrapper">
          Line charts
        </div>
      }
      {
        activeChart === CHARTTYPES.BUBBLE && <div className="bubble-chart__wrapper">
          Bubble charts
        </div>
      }
    </div>
  );
}

export default App;
