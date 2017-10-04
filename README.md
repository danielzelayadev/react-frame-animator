# React Frame Animator

A simple react component that animates an array of frames.

[![Travis](https://img.shields.io/travis/danielzy95/react-frame-animator.svg)](https://travis-ci.org/danielzy95/react-frame-animator)
[![npm](https://img.shields.io/npm/v/react-frame-animator.svg)](https://www.npmjs.com/package/react-frame-animator)
[![npm](https://img.shields.io/npm/l/react-frame-animator.svg)](https://opensource.org/licenses/MIT)

## Getting Started

### Install

Using yarn:

```
yarn add react-frame-animator
```

Using npm:

```
npm i -S react-frame-animator
```

## Usage

1) Import After Installation

```js
import FrameAnimator from 'react-frame-animator';
```

2) Add the Component to Your App

```js
<FrameAnimator frames={frames} speed={500} />
```

### Props

| Name | Description | Type | Values |
|----| ---------| ---| ------|
| frames * | List of frames to be animated. This can be a url, file path, or image data. | String Array | [ "img/walk_up1.png", "img/walk_up2.png" ] |
| speed * | The speed in milliseconds of the animation. | Number | 500, 30, 1000 |
| playMode | The mode in which the animation will play. | Number | playModes.NORMAL **(Default)**, playModes.LOOP, playModes.REVERSE, playModes.LOOP_REVERSE |

**Note**: `playModes` can be imported as follows:

```js
import { playModes } from 'react-frame-animator';
```

## License

This project is licensed under the MIT License -  see the [LICENSE](https://github.com/danielzy95/react-frame-animator/blob/master/LICENSE) for details.