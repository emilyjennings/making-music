import React, { Component } from 'react';
import $ from 'jquery'
import Tone from 'tone'


export default class Practice extends Component {

  musicTest = () => {
    const synth = new Tone.MembraneSynth().toMaster();

    let tones =
      {
        'tone1': ["C2", "8n"],
        'tone2' : ["A5", "8n"],
        'tone3' : ["D1", "8n"],
      }

    function playSynth(toneName='tone3', toneOther='tone2'){
      let tone = tones[toneName]
      let other = tones[toneOther]
      synth.triggerAttackRelease(tone[0], tone[1])
      // synth.triggerAttackRelease(other[0], other[1])
    }
    /** Play Controls **/
    playSynth()
  };

  playBeat = () => {
    const synth = new Tone.Noise().toMaster();
    synth.triggerAttackRelease('D2', '4n')

  }

  // sequence = () => {
  //   const sequence = new Tone.Sequence(function(time, idx){
  //     this.musicTest()
  //     console.log('hi')
  //   }, [0,1,2,3]);
  //
  //   sequence.start()
  //
  //   $("#sequence").on("click", sequence.start())
  // };
  //

  intervals = () => {
    const synth = new Tone.MembraneSynth().toMaster();

    setInterval(function(){
      synth.triggerAttackRelease('C2', '8n')
    }, 1000);
  }

  sound2 = () => {
    var phaser = new Tone.Phaser({
    	"frequency" : 15,
    	"octaves" : 5,
    	"baseFrequency" : 1000
    }).toMaster();
    var synth = new Tone.FMSynth().connect(phaser);
    synth.triggerAttackRelease("C3", "2n");
  }

  sound3 = () => {
    var phaser = new Tone.Phaser({
    	"frequency" : 15,
    	"octaves" : 5,
    	"baseFrequency" : 1000
    }).toMaster();
    var synth = new Tone.FMSynth().connect(phaser);
    synth.triggerAttackRelease("E3", "7n");
  }

  phaserIntervals = () => {
    var phaser = new Tone.Phaser({
    	"frequency" : 15,
    	"octaves" : 5,
    	"baseFrequency" : 1000
    }).toMaster();
    var synth = new Tone.FMSynth().connect(phaser);
    setInterval(function(){
      synth.triggerAttackRelease("E3", "7n")
    }, 1000);
  }



  componentDidMount(){
    // this.musicTest()
    // this.intervals()
    // this.sequence()
  }

  render() {
    return (
      <div className="Practice">
        <button id="practice" onClick={this.musicTest}>Practice</button>
        <button id="sequence" onClick={this.intervals}>Interval Beat</button>
        <button id="sound2" onClick={this.sound2}>phaseer big</button>
        <button id="sound3" onClick={this.sound3}>phaser small</button>
        <button id="interval_phaser" onClick={this.phaserIntervals}>phaser interval</button>
      </div>
    )
  }

}
