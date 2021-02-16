import React, { useState } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";

let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let gainNode = audioContext.createGain();
let biquadFilter = audioContext.createBiquadFilter();

const Oscillator = ({ waveform, gainValue, filterType, filterFreq }) => {
  const [oscillators, setOscillators] = useState();

  const playSound = (midiNumber) => {
    let oscillator = audioContext.createOscillator();
    // Waveform type
    oscillator.type = waveform;
    oscillator.connect(biquadFilter);
    biquadFilter.connect(gainNode);
    biquadFilter.type = filterType;
    biquadFilter.frequency.setValueAtTime(filterFreq, audioContext.currentTime);
    biquadFilter.gain.setValueAtTime(25, audioContext.currentTime);
    // Gain Value
    gainNode.connect(audioContext.destination);
    gainNode.gain.value = gainValue;
    // console.log(gainNode.gain.minValue);
    // console.log(gainNode.gain.maxValue);
    oscillator.frequency.value = Math.pow(2, (midiNumber - 69) / 12) * 440;
    // console.log(gainNode.frequency.minValue);
    // console.log(gainNode.frequency.maxValue);
    setOscillators({ ...oscillators, [midiNumber]: oscillator });
    oscillator.start();
  };

  const stopSound = (midiNumber) => {
    oscillators[midiNumber].stop();
    delete oscillators[midiNumber];
  };

  const noteRange = {
    first: MidiNumbers.fromNote("c3"),
    last: MidiNumbers.fromNote("f4"),
  };

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  const windowScreen = window.screen.width;

  return (
    <>
      {windowScreen === 320 && (
        <Piano
          width={300}
          noteRange={noteRange}
          keyboardShortcuts={keyboardShortcuts}
          playNote={(midiNumber) => {
            playSound(midiNumber);
          }}
          stopNote={(midiNumber) => {
            stopSound(midiNumber);
          }}
        />
      )}

      {windowScreen === 768 && (
        <Piano
          width={700}
          noteRange={noteRange}
          keyboardShortcuts={keyboardShortcuts}
          playNote={(midiNumber) => {
            playSound(midiNumber);
          }}
          stopNote={(midiNumber) => {
            stopSound(midiNumber);
          }}
        />
      )}

      {windowScreen >= 1024 && (
        <Piano
          width={1000}
          noteRange={noteRange}
          keyboardShortcuts={keyboardShortcuts}
          playNote={(midiNumber) => {
            playSound(midiNumber);
          }}
          stopNote={(midiNumber) => {
            stopSound(midiNumber);
          }}
        />
      )}
    </>
  );
};

export default Oscillator;
