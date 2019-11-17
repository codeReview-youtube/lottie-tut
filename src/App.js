import React from "react";
import Lottie from "react-lottie";
import animationData from "./data.json";
import "./App.css";

function App() {
  const [paused, setPaused] = React.useState(false);
  const [stopped, setStopped] = React.useState(false);
  const [direction, setDirection] = React.useState(1);
  const [speed, setSpeed] = React.useState(1);

  const defaultOptions = {
    animationData
  };

  return (
    <div className="App">
      <header className="App-header">
        <Lottie
          width={400}
          height={400}
          isPaused={paused}
          isStopped={stopped}
          speed={1}
          options={defaultOptions}
          direction={direction}
        />
        <div>
          <span>Speed: 0</span>
          <input
            type="range"
            value={speed}
            min={"0"}
            max={"3"}
            step={"0.5"}
            onChange={e => setSpeed(e.currentTarget.value)}
          />
          <span>{speed}</span>
        </div>
        <div>
          <button onClick={() => setStopped(!stopped)} className="button">
            {stopped ? "Start" : "Stop"}
          </button>
          <button onClick={() => setPaused(!paused)} className="button">
            {paused ? "Paused" : "Pause"}
          </button>
          <button
            onClick={() => setDirection(direction * -1)}
            className="button"
          >
            Direction
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
