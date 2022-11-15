const Tone = require("tone");

const synth = new Tone.PolySynth().toDestination();

const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");

// document.addEventListener("keydown", (e) => {
//   console.log("played" + e.key);
//   const key = e.key;

//   const whiteKeyIndex = WHITE_KEYS.indexOf(key);
//   const blackKeyIndex = BLACK_KEYS.indexOf(key);

//   console.log(whiteKeyIndex);

//   if (whiteKeyIndex > -1)
//     document.addEventListener("keyup", (e) => {
//       synth.triggerRelease(whiteKeys[whiteKeyIndex].id, Tone.now() + 0.3);
//     });
//   if (blackKeyIndex > -1)
//     document.addEventListener("keyup", (e) => {
//       synth.triggerRelease(blackKeys[blackKeyIndex].id, Tone.now() + 0.3);
//     });
//   console.log(whiteKeys);
//   if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
//   if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
// });

// function myIndexOf(thing, array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(i);
//     if (thing === array[i]) {
//       return i;
//     }
//   }
// }

// function playNoteClick(key) {
//   const theKey = document.getElementById(key);
//   console.log(whiteKeys);
//   const number = myIndexOf(theKey, whiteKeys);

//   theKey.textContent = WHITE_KEYS[number];

//   synth.triggerAttackRelease(key, "4n");
// }

// function playNote(key) {
//   console.log(key);
//   synth.triggerAttack(key.id, Tone.now());
// }

export default function usePiano() {
  const synth = new Tone.PolySynth().toDestination();

  const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
  const BLACK_KEYS = ["s", "d", "g", "h", "j"];

  //const keys = document.querySelectorAll(".key");

  //function setUpKeys() {}

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

  function myIndexOf(thing, array) {
    for (let i = 0; i < array.length; i++) {
      console.log(i);
      if (thing === array[i]) {
        return i;
      }
    }
  }

  // function playNoteClick(key) {
  //   const theKey = document.getElementById(key);
  //   console.log(whiteKeys);
  //   const number = myIndexOf(theKey, whiteKeys);

  //   theKey.textContent = WHITE_KEYS[number];

  //   synth.triggerAttackRelease(key, "4n");
  // }

  function playNote(key) {
    console.log(key);
    synth.triggerAttack(key.id, Tone.now());
  }
}
