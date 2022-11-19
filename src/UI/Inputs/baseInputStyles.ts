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
        background-color: ${theme.colors.backgrounds.d};
      }

      .label {
        position: absolute;
        font-size: ${theme.fonts.sizes.l};
        padding: 0.2rem 0.4rem 0 0.4rem;
        color: ${theme.fonts.colors.primary};
        transition: top 0.2s ease;
      }

      .input {
        font-size: ${theme.fonts.sizes.xl};
        color: ${theme.fonts.colors.primary};
        border: 0.1rem solid ${theme.colors.elements.e};
        height: 4.8rem;
        width: 100%;
        &:focus {
          border: 0.1rem solid ${theme.colors.elements.a};
        }
      }

      .input:focus + .label {
        top: 0;
      }

      .wrapper .input {
        ${error && `border: 0.1rem solid ${theme.colors.elements.b};`}
      }

      .error {
        align-self: flex-end;
        margin-top: 0.8rem;
        ${error && `color: ${theme.fonts.colors.error};`}
      }
    }
  `
}
