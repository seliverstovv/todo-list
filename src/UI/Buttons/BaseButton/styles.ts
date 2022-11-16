import { css } from "@emotion/react"
import { ThemeProps } from "theme"
import { BaseButtonProps } from "UI/Buttons/baseButtonTypes"

export default ({ theme, direction = "row", size = "large" }: ThemeProps & BaseButtonProps) => {
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return css`
          font-size: ${theme.fontSizes.m};
          padding: 0.4rem 0.8rem;
        `
      case "mid":
        return css`
          font-size: ${theme.fontSizes.xl};
          padding: 0.8rem 1.2rem;
        `
      case "large":
        return css`
          font-size: ${theme.fontSizes.xl};
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
      cursor: pointer;
      flex-flow: ${direction};
      border-radius: ${theme.radius.button};
      ${getSizeStyles()}
      &:disabled {
        background-color: ${theme.colors.secondary.b};
        border: 1px solid ${theme.colors.secondary.b};
        pointer-events: none;
      }
    }
  `
}
