import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"
import { ToggleSwitchProps } from "./types"

export default ({ theme: { colors } }: ThemeProps & ToggleSwitchProps) => {
  return css`
    & {
      position: relative;
      width: 4.5rem;
      height: 2.4rem;
      border: 0.1rem solid ${colors.elements.a};
      border-radius: 2rem;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        .styled {
          filter: brightness(120%);
        }
      }

      .original {
        opacity: 0;
      }

      .original,
      .styled {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .styled {
        border-radius: 50%;
        width: 1.8rem;
        height: 1.8rem;
        background-color: ${colors.elements.b};
        transform: translate(-50%, -50%);
        top: 50%;
        left: 1.2rem;
        transition: left 0.2s ease;
      }

      .original:checked + .styled {
        background-color: ${colors.elements.c};
        left: 3.3rem;
      }
    }
  `
}
