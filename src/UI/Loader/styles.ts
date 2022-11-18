import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"

export default ({ theme }: ThemeProps) => {
  return css`
    & {
      display: inline-block;
      position: relative;
      width: 8rem;
      height: 8rem;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;

      div {
        position: absolute;
        border: 0.4rem solid ${theme.colors.primary.deep};
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      }

      div:nth-child(2) {
        animation-delay: -0.5s;
      }

      @keyframes lds-ripple {
        0% {
          top: 3.6rem;
          left: 3.6rem;
          width: 0;
          height: 0;
          opacity: 0;
        }
        4.9% {
          top: 3.6rem;
          left: 3.6rem;
          width: 0;
          height: 0;
          opacity: 0;
        }
        5% {
          top: 3.6rem;
          left: 3.6rem;
          width: 0;
          height: 0;
          opacity: 1;
        }
        100% {
          top: 0;
          left: 0;
          width: 7.2rem;
          height: 7.2rem;
          opacity: 0;
        }
      }
    }
  `
}
