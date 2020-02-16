import React, { Component } from 'react';
import Tone from 'tone'

// const sampler = new Tone.Players({
//   'kick': 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/kick.mp3',
//   'snare': 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/snare.mp3',
//   'hat': 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/hh.mp3',
// })

const volumeTwo = new Tone.Volume(-200).toMaster();
var fmOsc = new Tone.AMOscillator("Ab3", "sine", "square").toMaster();

// sampler.connect(volumeTwo)

export default class Tones extends Component {

  oscillator = () => {
    fmOsc.connect(volumeTwo)
    fmOsc.start()

  }

  tone = () => {
    var phaser = new Tone.Phaser({
      "frequency" : 20,
      "octaves" : 5,
      "baseFrequency" : 1000
    }).toMaster();
    var synth = new Tone.FMSynth().connect(phaser);
    synth.triggerAttackRelease("E3", "7n");
  }

  stop = () => {
    fmOsc.stop();
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
