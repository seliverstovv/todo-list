import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"
import { PaperProps } from "./types"

export default ({ theme }: ThemeProps & PaperProps) => {
  const { radius, colors } = theme
  return css`
    & {
      padding: 3.2rem 4.2rem;
      background-color: ${colors.secondary.d};
      border-radius: ${radius.paper};
    }
  `
}
