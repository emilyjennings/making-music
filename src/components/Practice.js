// First try at all of this - this file can be ignored and will be deleted later

import React, { Component } from 'react';
import $ from 'jquery'
import Tone from 'tone'

import Jess from './containers/Jess'
// import Parts from './containers/Parts'

const sampler = new Tone.Players({
  'kick': 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/kick.mp3',
  'snare': 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/snare.mp3',
  'hat': 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/hh.mp3',
  // 'bear': '../audio_files/bear.mp3'
})

const volume = new Tone.Volume(5).toMaster();
const volumeTwo = new Tone.Volume(-200).toMaster();
sampler.connect(volume)


export default class Practice extends Component {

  state = {
    partsClicked: false
  }

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
    }

    $('.practice').css("background", "red")
    /** Play Controls **/
    playSynth()
  };

  playBeat = () => {
    const synth = new Tone.Noise().toMaster();
    synth.triggerAttackRelease('D2', '4n')
  }

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
    	"frequency" : 20,
    	"octaves" : 5,
    	"baseFrequency" : 1000
    }).toMaster();
    var synth = new Tone.FMSynth().connect(phaser);
    synth.triggerAttackRelease("E3", "7n");
  }

  phaserIntervals = () => {
    const phaser = new Tone.Phaser({
    	"frequency" : 15,
    	"octaves" : 5,
    	"baseFrequency" : 1000
    }).toMaster();
    var synth = new Tone.FMSynth().connect(phaser);
    setInterval(function(){
      synth.triggerAttackRelease("E3", "7n")
    }, 500);
  }

  oscillator = () => {
    var fmOsc = new Tone.AMOscillator("Ab3", "sine", "square").toMaster();
    if (this.state.oscClicked === false) {
      fmOsc.connect(volumeTwo)
      fmOsc.start()
      this.setState({ oscClicked: true })
    } else if (this.state.oscClicked === true){
      fmOsc.stop()
      this.setState({ oscClicked: false })
    }
  }


  kickStart = () => {
    setInterval(function(){
      sampler.get('kick').start()
    }, 250);
  }

  playParts = () => {

    // create a synth
    const synth = new Tone.Synth().toMaster();
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
    // Setup the synth to be ready to play on beat 1
    synthPart.start();
    // Note that if you pass a time into the start method
    // you can specify when the synth part starts
    // e.g. .start('8n') will start after 1 eighth note
    // start the transport which controls the main timeline
    Tone.Transport.start();
  }

  loop = () => {
    // create a new synth
    const synth = new Tone.MembraneSynth().toMaster();
    // create a new tone loop
    const loop = new Tone.Loop(function(time) {
      // Run once per eighth note, 8n, & log the time
      console.log(time);
      // trigger synth note
      synth.triggerAttackRelease("C2", "2n");
    }, "2n").start(0);
    // Start the transport which is the main timeline
    Tone.Transport.start();
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="Practice">
        <button id="practice" onClick={this.musicTest}></button>
        <button id="sequence" onClick={this.intervals}></button>
        <button id="phaser2" onClick={this.sound2}></button>
        <button id="phaser3" onClick={this.sound3}></button>
        <button id="interval_phaser" onClick={this.phaserIntervals}></button>
        <button id="oscillator" onClick={this.oscillator}></button>
        <button id="loop" onClick={this.loop}></button>
        <button id="kick" onClick={this.kickStart}></button>
        <button id="parts" onClick={this.playParts}></button>
        < Jess />
      </div>
    )
  }

}
