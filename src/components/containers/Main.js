import React, { Component } from 'react';
import $ from 'jquery'
import Typed from 'typed.js'
import Tone from 'tone'

import Practice from "../Practice.js"


export default class Main extends Component {

  typedSentenceAnimation = () => {
     var typed = new Typed('.intro', {
       strings: ["Welcome to music.", "and other stuff"],
       stringsElement: null,
     		// typing speed
     		typeSpeed: 30,
     		// time before typing starts
     		startDelay: 1200,
     		// backspacing speed
     		backSpeed: 20,
     		// time before backspacing
     		backDelay: 500,
     		// loop
     		loop: true,
     		// false = infinite
     		loopCount: 5,
     		// show cursor
     		showCursor: false,
     		// character for cursor
     		cursorChar: "|",
     		// attribute to type (null == text)
     		attr: null,
     		// either html or text
     		contentType: 'html',
     		// call when done callback function
     		callback: function() {},
     		// starting callback function before each string
     		preStringTyped: function() {},
     		//callback for every typed string
     		onStringTyped: function() {},
     		// callback for reset
     		resetCallback: function() {}
     });
  }

  // musicSampler = () => {
  //   const sampler =  new Tone.Players({
  //     })
  // }
  //

  // MusicTest(){
  //   const synth = new Tone.MembraneSynth().toMaster();
  //
  //   function playSynth(){
  //     synth.triggerAttackRelease("C2", "8n");
  //   }
  //   /** Play Controls **/
  //   document.getElementById("play").addEventListener("click", function(){ playSynth(); });
  // }


  componentDidMount(){
    {this.typedSentenceAnimation()}
    // {this.musicSampler()}
    // {this.MusicTest()}
  }


  render() {
    return (
      <div className="Main">
        <div className="intro"></div>
        < Practice />
      </div>
    )
  }

}
