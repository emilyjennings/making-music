import React, { Component } from 'react';
import Tone from 'tone'

import bear from './audio_files/bear.mp3'

const jessBear = new Tone.Player(bear).toMaster();


export default class Jess extends Component {

  state = {
    bearClicked: false,
  }

  bear = () => {
    if (this.state.bearClicked === false) {
      this.setState({ bearClicked: true })
      setInterval(function(){
          jessBear.start()
        }, 2300)
    } else if (this.state.bearClicked === true) {
      jessBear.stop()
      this.setState({ bearClicked: false })
    }
  }

  stop = () => {
    jessBear.stop();
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="bear">
        <button id="bear" onClick={this.bear}></button>
        <button id="stop" onClick={this.stop}></button>
      </div>
    )
  }
}
