import React, { Component } from 'react';
import $ from 'jquery'
import Tone from 'tone'

import Jess from './containers/Jess'
import Parts from './containers/Parts'

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
    oscClicked: false
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

    var synth = new Tone.Synth().toMaster()

    //pass in an array of events
    var part = new Tone.Part(function(time, event){
    //   //the events will be given to the callback with the time they occur
    //   synth.triggerAttackRelease(event.note, event.dur, time)
    // }, [{ time : 0, note : 'C4', dur : '4n'},
    //   { time : {'4n' : 1, '8n' : 1}, note : 'E4', dur : '8n'},
    //   { time : '2n', note : 'G4', dur : '16n'},
    //   { time : {'2n' : 1, '8t' : 1}, note : 'B4', dur : '4n'}])

    //start the part at the beginning of the Transport's timeline
      synth.triggerAttackRelease('C4', '4n')
    }, 200)

    part.start(0)

    //loop the part 3 times
    // part.loop = 3
    // part.loopEnd = '1m'

    // document.querySelector('#parts').addEventListener('change', e => Tone.Transport.toggle())
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
      </div>
    )
  }

}
