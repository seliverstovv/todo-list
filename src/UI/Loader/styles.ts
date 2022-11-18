import { css } from "@emotion/react"

export default () => {
  return css`
    & {
      display: inline-block;
      position: relative;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;

      div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
      }
      div:nth-of-type() {
        animation-delay: -0.45s;
      }
      div:nth-of-type() {
        animation-delay: -0.3s;
      }
      div:nth-of-type() {
        animation-delay: -0.15s;
      }
      @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  `
}