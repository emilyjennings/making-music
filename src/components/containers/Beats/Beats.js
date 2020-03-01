import React, { Component } from 'react';
import Tone from 'tone'


const phaser = new Tone.Phaser({
  "frequency" : 15,
  "octaves" : 5,
  "baseFrequency" : 1000
}).toMaster();

const am_synth = new Tone.Phaser({
  "frequency" : 10,
  "octaves" : 5,
  "baseFrequency" : 2000
}).toMaster();


export default class Beats extends Component {


  beat_one = () => {
    var synth = new Tone.FMSynth().connect(phaser);
    setInterval(function(){
      synth.triggerAttackRelease("E3", "7n")
    }, 500);
  }

  beat_two = () => {
    var synth = new Tone.FMSynth().connect(am_synth);
    setInterval(function(){
      synth.triggerAttackRelease("A3", "8n")
    }, 900);
  }

  stop = () => {
    // Still working on this
  }

  render() {
    return (
      <div className="beats">
        <button id="beat_one" onClick={this.beat_one}></button>
        <button id="beat_two" onClick={this.beat_two}></button>
        <button id="stop" onClick={this.stop}></button>
      </div>
    )
  }
}
