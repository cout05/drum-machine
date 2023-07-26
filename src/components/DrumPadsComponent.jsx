import { useEffect, useState } from "react";
import "../styles/drumpads.css";

const DrumPadsComponent = ({ onButtonClick, toggleState, volumeState }) => {
  const [key, setKey] = useState("Q");
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playSound(event.key.toUpperCase());
    });
  }, []);

  useEffect(() => {
    const sound = document.getElementById(key);
    sound.volume = volumeState / 100;
  }, [volumeState, key]);

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    if (toggleState) {
      if (audio) {
        audio.play();
        onButtonClick(selector);
        setKey(selector);
      }
    }
  }

  return (
    <div className="drum-pads">
      {drumPads.map((drumPad) => (
        <div
          onClick={() => {
            playSound(drumPad.text);
          }}
          className="drum-pad"
          key={drumPad.text}
          id={drumPad.keyCode}>
          {drumPad.text}
          <audio className="clip" src={drumPad.src} id={drumPad.text}></audio>
        </div>
      ))}
    </div>
  );
};

export default DrumPadsComponent;
