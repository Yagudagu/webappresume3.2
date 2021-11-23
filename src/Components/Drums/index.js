import React from "react";

import { Wrapper } from "./Drums.styles";

const firstSoundsGroup = [
  {
    keyCode: 73,
    key: "I",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 79,
    key: "O",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 80,
    key: "P",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 75,
    key: "K",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 76,
    key: "L",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 186,
    key: ";",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 188,
    key: "<",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 191,
    key: ">",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 190,
    key: "/",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const secondSoundsGroup = [
  {
    keyCode: 73,
    key: "I",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 79,
    key: "O",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 80,
    key: "P",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 75,
    key: "K",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 76,
    key: "L",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 186,
    key: ";",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 188,
    key: "<",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 191,
    key: ">",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 190,
    key: "/",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const soundsName = {
  heaterKit: "Heater Kit",
  smoothPianoKit: "Smooth Piano Kit",
};

const soundsGroup = {
  heaterKit: firstSoundsGroup,
  smoothPianoKit: secondSoundsGroup,
};

const KeyboardKey = ({ sound: { key, url, keyCode }, play }) => {
  const handleKeydown = (e) => {
    if (e.keyCode === keyCode) {
      play(key);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, []);

  return (
    <button className="drum-pad" onClick={() => play(key)}>
      <audio id={key} className="clip" src={url} />
      {key}
    </button>
  );
};

const Keyboard = ({ play, sounds, id }) => {
  return (
    <div id={id}>
      {sounds.map((sound) => (
        <KeyboardKey sound={sound} play={play} />
      ))}
    </div>
  );
};

const DrumControl = ({ changeSoundsGroup }) => (
  <div className="control">
    <button onClick={changeSoundsGroup}>Change Sounds Group</button>
  </div>
);

const DrumMachine = () => {
  const [soundType, setSoundType] = React.useState("heaterKit");
  const [sounds, setSounds] = React.useState(soundsGroup[soundType]);

  const play = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  const changeSoundsGroup = () => {
    if (soundType === "heaterKit") {
      setSoundType("smoothPianoKit");
      setSounds(soundsGroup.smoothPianoKit);
    } else {
      setSoundType("heaterKit");
      setSounds(soundsGroup.heaterKit);
    }
  };

  return (
    <Wrapper>
      <Keyboard id="keyboard" play={play} sounds={sounds} />
      <div id="keyboard-controls">
        <DrumControl changeSoundsGroup={changeSoundsGroup} />
        <div>{soundType}</div>
      </div>
    </Wrapper>
  );
};

export default DrumMachine;
