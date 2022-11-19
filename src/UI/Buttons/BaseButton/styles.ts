import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"
import { BaseButtonProps } from "UI/Buttons/baseButtonTypes"

export default ({ theme, direction = "row", size = "large" }: ThemeProps & BaseButtonProps) => {
  const getSizeStyles = () => {
    switch (size) {
      case "mini":
        return css`
          width: 4rem;
          height: 4rem;
          padding: 0.2rem;
          svg {
            width: 100%;
            height: 2rem;
          }
        `
      case "small":
        return css`
          font-size: ${theme.fonts.sizes.m};
          padding: 0.4rem 0.8rem;
        `
      case "mid":
        return css`
          font-size: ${theme.fonts.sizes.xl};
          padding: 0.8rem 1.2rem;
        `
      case "large":
        return css`
          font-size: ${theme.fonts.sizes.xl};
          padding: 1.2rem 1.6rem;
        `
      default:
        return ""
    }
  }

  return css`
    & {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      flex-flow: ${direction};
      border-radius: ${theme.radius.button};
      ${getSizeStyles()}
      &:disabled {
        pointer-events: none;
      }
    }
  `
}
