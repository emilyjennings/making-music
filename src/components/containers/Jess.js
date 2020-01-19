import React, { Component } from 'react';
import $ from 'jquery'
import Tone from 'tone'

import bear from '../../audio_files/bear.mp3'


export default class Jess extends Component {

  bear = () => {
    const jessBear = new Tone.Player(bear).toMaster();
    setInterval(function(){
      jessBear.start()
    }, 2000)
  }


  componentDidMount(){
  }

  render() {
    return (
      <div className="Practice">
        <button id="bear" onClick={this.bear}></button>
      </div>
    )
  }
}
