import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"
import { BaseInputProps } from "./types"

export default ({ theme, error }: ThemeProps & BaseInputProps) => {
  return css`
    & {
      display: block;

      .wrapper {
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
          border: 0.1rem solid ${theme.colors.primary.accent.a};
          outline: none;
        }
      }

      .input:focus + .label {
        top: 0;
      }

      .wrapper .input {
        ${error && `border: 0.1rem solid ${theme.colors.primary.accent.b};`}
      }

      .error {
        align-self: flex-end;
        margin-top: 0.8rem;
        ${error && `color: ${theme.colors.primary.accent.b};`}
      }
    }
  `
}
