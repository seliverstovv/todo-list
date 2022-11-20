import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"
import { ButtonProps } from "./types"

export default ({
  theme: { colors },
  isActive,
  isToggle = false,
  kind = "default",
}: ThemeProps & ButtonProps) => {
  const isToggleAndActive = isToggle && isActive
  const isActiveNotToggle = isActive && !isToggle

  const mapBaseStyles = css`
    color: ${colors.buttons[kind].base.color};
    border: 0.1rem solid ${colors.buttons[kind].base.border};
    background-color: ${colors.buttons[kind].base.background};
    svg {
      fill: ${colors.buttons[kind].base.color};
    }
  `

  const mapActiveStyles = css`
    color: ${colors.buttons[kind].hover.color};
    border: 0.1rem solid ${colors.buttons[kind].hover.border};
    background-color: ${colors.buttons[kind].hover.background};
    ${isActiveNotToggle && "pointer-events: none;"}
    svg {
      fill: ${colors.buttons[kind].hover.color};
    }
  `

  const hover = css`
    &:hover {
      ${mapActiveStyles}
      ${isToggleAndActive && "filter: brightness(120%);"}
    }
  `

  return css`
    & {
      ${mapBaseStyles}
      ${hover}
      ${isActive && mapActiveStyles}
    }
  `
}
