import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"
import { TextInputProps } from "../types"

export default ({ value, icon, withError }: ThemeProps & TextInputProps) => {
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
      position: relative;
      padding-bottom: ${withError ? "2.2rem" : "0"};

      .label {
        transform: translateY(-50%);
        top: ${isEmptyValue ? "50%" : "0"};
        left: ${icon ? "3.6rem" : "1.6rem"};
      }

      .wrapper .input {
        padding-left: ${icon ? "3.2rem" : "1rem"};
      }

      .error {
        position: absolute;
        bottom: 0;
      }

      ${getIconStyles()}
    }
  `
}
