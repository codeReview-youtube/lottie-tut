import React from "react";
import logo from "./logo.svg";
import Lottie from "react-lottie";
import animationData from "./data.json";
import "./App.css";

function App() {
  const [paused, setPaused] = React.useState(false);
  const [stopped, setStopped] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Lottie
          width={400}
          height={400}
          isPaused={paused}
          isStopped={stopped}
          speed={1}
          options={{
            loop: true,
            autoplay: true,
            animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
        />
        <div>
          <button onClick={() => setStopped(!stopped)}>
            {stopped ? "Start" : "Stop"}
          </button>
          <button onClick={() => setPaused(!paused)}>
            {paused ? "Paused" : "Pause"}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
