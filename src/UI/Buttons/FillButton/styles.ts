import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"

export default ({ theme: { colors } }: ThemeProps) => {
  return css`
    & {
      border: 0.1rem solid ${colors.secondary.c};
      background-color: ${colors.secondary.c};
      color: ${colors.primary.main};
      &:hover {
        border: 0.1rem solid ${colors.secondary.a};
        background-color: ${colors.secondary.a};
      }
    }
  `
}
