import React, { Component } from 'react';
import $ from 'jquery'
import Tone from 'tone'

import Sequences from './Sequences/Sequences.js'
import Tones from './Tones/Tones.js'
import Beats from './Beats/Beats.js'
import Jess from './Voices/Jess.js'


export default class MusicContainer extends Component {

  render() {
    return (
      <div className="buttons">
        <Sequences />
        <Tones />
        <Beats />
      </div>
    )
  }

}
