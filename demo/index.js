import React, { Component } from 'react';
import { render } from 'react-dom';

import Climb1 from './img/alienBlue_climb1.png';
import Climb2 from './img/alienBlue_climb2.png';
import Jump   from './img/alienBlue_jump.png';
import Hit    from './img/alienBlue_hit.png';

import FrameAnimator, { playModes } from '../src';

import { updateField } from './utils';

const formGroupStyle = { 
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 400,
  marginBottom: 10
};

class App extends Component {
  state = {
    animationSpeed: 500,
    playMode: playModes.NORMAL
  }
  updateAnimationSpeed = updateField('animationSpeed', this).bind(this)
  updatePlayMode = updateField('playMode', this).bind(this)
  render() {
    const { animationSpeed, playMode } = this.state;
    const { updateAnimationSpeed, updatePlayMode } = this;

    return [
        <div key="speed-ctrl" style={formGroupStyle}>
          <label>Animation Speed</label>
          <input type="number" value={animationSpeed} onChange={updateAnimationSpeed} />
        </div>,
        <div key="playMode-ctrl" style={formGroupStyle}>
          <label>Play Mode</label>
          <div>
            <label><input name="playmode" type="radio" value={playModes.NORMAL} onChange={updatePlayMode} /> Normal</label>
            <label><input name="playmode" type="radio" value={playModes.LOOP} onChange={updatePlayMode} /> Loop</label>
            <label><input name="playmode" type="radio" value={playModes.REVERSE} onChange={updatePlayMode} /> Reverse</label>
            <label><input name="playmode" type="radio" value={playModes.LOOP_REVERSE} onChange={updatePlayMode} /> Loop Reverse</label>
          </div>
        </div>,
        <FrameAnimator
          key="animator"
          frames={[Climb1, Climb2, Jump, Hit]}
          speed={Number(animationSpeed)}
          playMode={Number(playMode)}
        />
    ];
  }
}

render(<App />, document.querySelector('#app'));