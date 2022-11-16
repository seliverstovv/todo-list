import { css } from "@emotion/react"
import { ThemeProps } from "theme"
import { TextInputProps } from "./types"

export default ({ theme, value, icon, error }: ThemeProps & TextInputProps) => {
  const isEmptyValue = value?.trim().length === 0

  const getIconStyles = () => {
    if (icon) {
      return `
        .icon {
          position: absolute;
          left: 0.8rem;
          transform: translateY(-50%);
          top: 50%;
          svg {
            width: 2rem;
          }
        }
      `
    }

    return ""
  }

  return css`
    & {
      .label {
        transform: translateY(-50%);
        top: ${isEmptyValue ? "50%" : "0"};
        left: ${icon ? "3.6rem" : "1.6rem"};
      }

      .placeholder .input {
        padding-left: ${icon ? "3.2rem" : "1rem"};
        ${error && `border: 1px solid ${theme.colors.primary.accent.b};`}
      }

      ${getIconStyles()}
    }
  `
}
