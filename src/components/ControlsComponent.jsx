import React, { useEffect, useState } from "react";
import "../styles/controls.css";

const ControlsComponent = ({ displayKey, onToggleCLick, onVolumeChange }) => {
  const [isToggleClick, SetIsToggleClick] = useState(true);
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    onVolumeChange(volume);
  };

  const KeyToValueMap = {
    Q: "Heater 1",
    W: "Heater 2",
    E: "Heater 3",
    A: "Heater 4",
    S: "Clap",
    D: "Open-HH",
    Z: "Kick-n'-Hat",
    X: "Kick",
    C: "Closed-HH",
  };

  useEffect(() => {
    if (KeyToValueMap.hasOwnProperty(displayKey)) {
      setDisplay(KeyToValueMap[displayKey]);
    }
  }, [displayKey]);

  const toggleCLick = () => {
    SetIsToggleClick(!isToggleClick);
    onToggleCLick(isToggleClick);
    console.log(isToggleClick);
    if (!isToggleClick) {
      setDisplay("");
    }
  };

  return (
    <div className="controls-con">
      <div className="power-button-con">
        <p>Power</p>
        <label className="switch">
          <input type="checkbox" onClick={toggleCLick} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="display-name" id="display">
        <p className="name">{display}</p>
      </div>
      <div className="volume-slider-con">
        <p>{volume}</p>
        <input
          type="range"
          className="volume-slider"
          onChange={handleVolumeChange}
          min="0"
          max="100"
        />
      </div>
    </div>
  );
};

export default ControlsComponent;
