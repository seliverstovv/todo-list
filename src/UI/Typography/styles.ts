import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"
import { TypographyProps } from "./types"

export default ({ theme, size = "l" }: ThemeProps & TypographyProps) => {
  const { fontSizes } = theme
  return css`
    & {
      color: ${theme.colors.primary.main};
      font-size: ${fontSizes[size]};
      font-weight: 400;
    }
  `
}
