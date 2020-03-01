import React, { Component } from 'react';
import Tone from 'tone'

const synth = new Tone.Synth().toMaster();

export default class Sequences extends Component {

  playParts = () => {
    // create an array of notes to be played
    const notes = ["C3", "Eb3", "G3", "Bb3"];
    // create a new sequence with the synth and notes
    const synthPart = new Tone.Sequence(
      function(time, note) {
        synth.triggerAttackRelease(note, "10hz", time);
      },
      notes,
      "4n"
    );
    synthPart.start();
    Tone.Transport.start();
  }

  sequence = () => {
    // create an array of notes to be played
    const notes = ["A5", "G1", "G3", "D2"];
    // create a new sequence with the synth and notes
    const synthPart = new Tone.Sequence(
      function(time, note) {
        synth.triggerAttackRelease(note, "10hz", time);
      },
      notes,
      "4n"
    );
    // Setup the synth to be ready to play on beat 1
    synthPart.start();
    Tone.Transport.start();
  }

  stop = () => {
    Tone.Transport.stop();
  }


  render() {
    return (
      <div className="sequences">
        <button id="parts" onClick={this.playParts}></button>
        <button id="sequence_one" onClick={this.sequence}></button>
        <button id="stop" onClick={this.stop}></button>
      </div>
    )
  }

}
