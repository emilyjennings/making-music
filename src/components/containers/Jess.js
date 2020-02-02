import React, { Component } from 'react';
import Tone from 'tone'

import bear from '../../audio_files/bear.mp3'


export default class Jess extends Component {

  state = {
    bearClicked: false,
  }

  bear = () => {
    const jessBear = new Tone.Player(bear).toMaster();
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



  componentDidMount(){
  }

  render() {
    return (
      <div className="bear">
        <button id="bear" onClick={this.bear}></button>
      </div>
    )
  }
}
