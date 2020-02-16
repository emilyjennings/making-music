import React, { Component } from 'react';
import Tone from 'tone'


const sampler = new Tone.Players({
  'kick': 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/kick.mp3',
  'snare': 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/snare.mp3',
  'hat': 'https://cdn.jsdelivr.net/gh/Tonejs/Tone.js/examples/audio/505/hh.mp3',
  // 'bear': '../audio_files/bear.mp3'
})

const volume = new Tone.Volume(5).toMaster();
const volumeTwo = new Tone.Volume(-200).toMaster();
sampler.connect(volume)

export default class Beats extends Component {

  kickStart = () => {
    setInterval(function(){
      sampler.get('kick').start()
    }, 250);
  }

  render() {
    return (
      <div className="beats">
        <button id="beat_one" onClick={this.kick}></button>
        <button id="beat_two" onClick={this.kick}></button>
      </div>
    )
  }
}
