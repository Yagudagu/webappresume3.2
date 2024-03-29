import react, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";

import { Wrapper } from "./Piano.styles";

const Tone = require("tone");

const Piano = () => {
  const refTest = useRef();
  const synth = new Tone.PolySynth().toDestination();

  const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
  const BLACK_KEYS = ["s", "d", "g", "h", "j"];

  function doStuff() {
    console.log(refTest.current);

    const keys = document.querySelectorAll(".key");

    function setUpKeys() {}

    const whiteKeys = document.querySelectorAll(".key.white");
    const blackKeys = document.querySelectorAll(".key.black");

    document.addEventListener("keydown", (e) => {
      console.log("played" + e.key);
      const key = e.key;

      const whiteKeyIndex = WHITE_KEYS.indexOf(key);
      const blackKeyIndex = BLACK_KEYS.indexOf(key);

      console.log(whiteKeyIndex);

      if (whiteKeyIndex > -1)
        document.addEventListener("keyup", (e) => {
          synth.triggerRelease(whiteKeys[whiteKeyIndex].id, Tone.now() + 0.3);
        });
      if (blackKeyIndex > -1)
        document.addEventListener("keyup", (e) => {
          synth.triggerRelease(blackKeys[blackKeyIndex].id, Tone.now() + 0.3);
        });
      console.log(whiteKeys);
      if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
      if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
    });
  }

  function playNote(key) {
    console.log(key);
    synth.triggerAttack(key.id, Tone.now());
  }

  function myIndexOf(thing, array) {
    for (let i = 0; i < array.length; i++) {
      if (thing === array[i]) {
        return i;
      }
    }
  }

  function playNoteClick(key) {
    const theKey = document.getElementById(key);
    // console.log(whiteKeys);
    // const number = myIndexOf(theKey, whiteKeys);

    // theKey.textContent = WHITE_KEYS[number];

    synth.triggerAttackRelease(key, "4n");
  }

  return (
    <Wrapper afterComponentMount={doStuff()}>
      <HashLink className="return-to-main" to="/">
        Back to the main page
      </HashLink>
      <div className="piano-container">
        <div
          ref={refTest}
          id="C4"
          className="key white"
          onClick={() => playNoteClick("C4")}
        />
        <div
          id="Db4"
          className="key black"
          onClick={() => playNoteClick("Db4")}
        />
        <div
          id="D4"
          className="key white"
          onClick={() => playNoteClick("D4")}
        />
        <div
          id="Eb4"
          className="key black"
          onClick={() => playNoteClick("Eb4")}
        />
        <div
          id="E4"
          className="key white"
          onClick={() => playNoteClick("E4")}
        />
        <div
          id="F4"
          className="key white"
          onClick={() => playNoteClick("F4")}
        />
        <div
          id="Gb4"
          className="key black"
          onClick={() => playNoteClick("Gb4")}
        />
        <div
          id="G4"
          className="key white"
          onClick={() => playNoteClick("G4")}
        />
        <div
          id="Ab4"
          className="key black"
          onClick={() => playNoteClick("Ab4")}
        />
        <div
          id="A4"
          className="key white"
          onClick={() => playNoteClick("A4")}
        />
        <div
          id="Bb4"
          className="key black"
          onClick={() => playNoteClick("Bb4")}
        />
        <div
          id="B4"
          className="key white"
          onClick={() => playNoteClick("B4")}
          onComponentMount={console.log("balls")}
        />
      </div>
    </Wrapper>
  );
};

export default Piano;
