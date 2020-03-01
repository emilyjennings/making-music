import React, { Component } from 'react';
import Tone from 'tone'


const volumeTwo = new Tone.Volume(-200).toMaster();
var fmOsc = new Tone.AMOscillator("Ab3", "sine", "square").toMaster();
var tone = new Tone.AMOscillator("D5", "sine", "square").toMaster();


export default class Tones extends Component {

  oscillator = () => {
    fmOsc.connect(volumeTwo)
    fmOsc.start()
  }

  tone = () => {
    // var phaser = new Tone.Phaser({
    //   "frequency" : 20,
    //   "octaves" : 5,
    //   "baseFrequency" : 1000
    // }).toMaster();
    // var synth = new Tone.FMSynth().connect(phaser);
    // synth.triggerAttackRelease("E3", "7n");
    tone.connect(volumeTwo)
    tone.start()
  }

  stop = () => {
    fmOsc.stop();
    tone.stop()
  }


  render() {
    return (
      <div className="tones">
        <button id="tone_one" onClick={this.oscillator}></button>
        <button id="tone_two" onClick={this.tone}></button>
        <button id="stop" onClick={this.stop}></button>
      </div>
    )
  }
}
