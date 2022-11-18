import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"

export default ({ theme }: ThemeProps) => {
  return css`
    & {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;

      div {
        position: absolute;
        border: 4px solid ${theme.colors.primary.deep};
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      }

      div:nth-child(2) {
        animation-delay: -0.5s;
      }

      @keyframes lds-ripple {
        0% {
          top: 36px;
          left: 36px;
          width: 0;
          height: 0;
          opacity: 0;
        }
        4.9% {
          top: 36px;
          left: 36px;
          width: 0;
          height: 0;
          opacity: 0;
        }
        5% {
          top: 36px;
          left: 36px;
          width: 0;
          height: 0;
          opacity: 1;
        }
        100% {
          top: 0px;
          left: 0px;
          width: 72px;
          height: 72px;
          opacity: 0;
        }
      }
    }
  `
}
