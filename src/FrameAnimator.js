import React, { Component } from "react";
import PropTypes from "prop-types";

export const playModes = {
  NORMAL: 0,
  LOOP: 1,
  REVERSE: 2,
  LOOP_REVERSE: 3
};

class FrameAnimator extends Component {
  timer = null
  state = {
    currFrame: 0
  }
  static defaultProps = {
    playMode: playModes.NORMAL
  }
  componentDidMount() {
    this.timer = setInterval(this.advanceFrame.bind(this), this.props.speed);
  }
  componentWillReceiveProps(props) {
    clearInterval(this.timer);
    this.setState({ ...this.state, currFrame: 0 });
    this.timer = setInterval(this.advanceFrame.bind(this), props.speed);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  advanceFrame() {
    const { frames, playMode }  = this.props;
    const { currFrame } = this.state;

    const newFrame = currFrame + 1;
    const done = newFrame == frames.length;

    const loop = playMode == playModes.LOOP || 
                 playMode == playModes.LOOP_REVERSE;

    if (done && loop)
      this.setState({ ...this.state, currFrame: 0 })
    else if (done)
      clearInterval(this.timer);
    else
      this.setState({ ...this.state, currFrame: newFrame });  
  }
  isReverse() {
    const { playMode } = this.props;
    return playMode == playModes.REVERSE ||
           playMode == playModes.LOOP_REVERSE;
  }
  render() {
    const { currFrame } = this.state;

    const frames = this.isReverse() ? 
      [ ...this.props.frames ].reverse() :
      this.props.frames;

    return <img src={frames[currFrame]} />;
  }
}

FrameAnimator.propTypes = {
  frames:   PropTypes.arrayOf(PropTypes.string).isRequired,
  speed:    PropTypes.number.isRequired,
  playMode: PropTypes.number
};

export default FrameAnimator;
