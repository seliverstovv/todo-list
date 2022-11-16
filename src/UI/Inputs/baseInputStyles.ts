import { css } from "@emotion/react"
import { ThemeProps } from "theme"

export default ({ theme }: ThemeProps) => {
  return css`
    & {
      display: block;

      .placeholder {
        position: relative;
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
        transition: top 0.2s ease;
      }

      .input {
        font-size: ${theme.fontSizes.xl};
        color: ${theme.colors.primary.main};
        border: 0.1rem solid ${theme.colors.primary.main};
        height: 4.8rem;
        width: 100%;
        &:focus {
          border: 1px solid ${theme.colors.primary.accent.a};
          outline: none;
        }
      }

      .input:focus + .label {
        top: 0;
      }
    }
  `
}
