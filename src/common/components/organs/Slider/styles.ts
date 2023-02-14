import { css } from '@emotion/css'

export const container = css`
  /
  //display: flex;
  //justify-content: center;
  //align-items: center;
`

export const carousel = css`
  width: 50%;
  height: 100%;
  perspective: 800px;
  perspective-origin: center bottom;
  transform-style: preserve-3d;
`

export const hexagon = css`
  position: relative;
  width: 400px;
  height: 200px;
  transform-style: preserve-3d;
`

export const side = css`
  position: absolute;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  transition: transform 1s, background-color 0.5s, opacity 1s;
`

export const front = css`
  //background-color: #f2eddf;
  transform: translateZ(250px);
  opacity: 0.9;
`

const backSide = css`
  //background-color: #141414;
  opacity: 0.3;
`

export const back = css`
  ${backSide}
  //background-color: #D96459;
  transform: translateZ(-480px);
`

export const left = css`
  //background-color: #49bfbf;
  transform: translateZ(50px) translateX(-370px) rotateY(-50deg);
`
export const right = css`
  //background-color: #f2c6b6;
  transform: translateZ(50px) translateX(370px) rotateY(50deg);
`

export const farLeft = css`
  ${backSide}
  //background-color: #389BA6;
  transform: translateX(-370px) translateZ(-310px) rotateY(50deg);
`
export const farRight = css`
  ${backSide}
  //background-color: #389BA6;
  transform: translateX(370px) translateZ(-310px) rotateY(-50deg);
`
