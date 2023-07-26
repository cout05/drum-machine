import DrumPads from "./components/DrumPadsComponent";
import Controls from "./components/ControlsComponent";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [displayKey, setDisplayKey] = useState("");
  const [volumeState, SetVolumeState] = useState(50);
  const [toggleState, setToggleState] = useState(true);

  const handleButtonClick = (clicked) => {
    setDisplayKey(clicked);
  };

  const handleToggleClick = (toggle) => {
    setToggleState(toggle);
  };

  const handleVolumeChange = (volume) => {
    SetVolumeState(volume);
  };

  return (
    <>
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <div className="container">
          <DrumPads
            onButtonClick={handleButtonClick}
            toggleState={toggleState}
            volumeState={volumeState}
          />
          <Controls
            displayKey={displayKey}
            onToggleCLick={handleToggleClick}
            onVolumeChange={handleVolumeChange}
          />
        </div>
      </div>
    </>
  );
}

export default App;
