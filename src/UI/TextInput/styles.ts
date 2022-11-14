import { css } from "@emotion/react"
import { ThemeProps } from "theme"
import { TextInputProps } from "./types"

export default ({ theme, value, icon, error }: ThemeProps & TextInputProps) => {
  const isEmptyValue = value.trim().length === 0

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
      .placeholder {
        display: inline-block;
        position: relative;
        padding: 0.8rem 0;
      }

      .input,
      .label {
        border-radius: ${theme.radius.button};
        background-color: ${theme.colors.secondary.d};
      }

      .label {
        position: absolute;
        font-size: ${theme.fontSizes.l};
        padding: 0.2rem 0.4rem 0 0.4rem;
        color: ${theme.colors.primary.main};
        transform: translateY(-50%);
        top: ${isEmptyValue ? "50%" : "8px"};
        left: ${icon ? "3.6rem" : "1.6rem"};
        transition: top 0.2s ease;
      }

      .input {
        font-size: ${theme.fontSizes.xl};
        color: ${theme.colors.primary.main};
        border: 0.1rem solid ${theme.colors.primary.main};
        height: 4.8rem;
        width: 100%;
        padding: ${icon ? " 0 2.4rem 0 3.2rem" : "0 1rem"};
        &:focus {
          border: 1px solid ${theme.colors.primary.accent.a};
          outline: none;
        }
        ${error && `border: 1px solid ${theme.colors.primary.accent.b};`}
      }

      .input:focus + .label {
        top: 8px;
      }

      ${getIconStyles()}
    }
  `
}
