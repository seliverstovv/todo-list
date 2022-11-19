import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"
import { TypographyProps } from "./types"

export default ({ theme, size = "l", color = "primary" }: ThemeProps & TypographyProps) => {
  const {
    fonts: { colors, sizes },
  } = theme

  return css`
    & {
      color: ${colors[color]};
      font-size: ${sizes[size]};
      font-weight: 400;
    }
  `
}
