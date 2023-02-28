import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"
import { ButtonProps } from "./types"

export default ({
    theme: { buttons },
    isActive,
    isToggle = false,
    kind = "default",
}: ThemeProps & ButtonProps) => {
    const isToggleAndActive = isToggle && isActive
    const isActiveNotToggle = isActive && !isToggle

    const mapBaseStyles = css`
        color: ${buttons[kind].base.color};
        border: 0.1rem solid ${buttons[kind].base.border};
        background-color: ${buttons[kind].base.background};
        svg {
            fill: ${buttons[kind].base.color};
        }
    `

    const mapActiveStyles = css`
        color: ${buttons[kind].hover.color};
        border: 0.1rem solid ${buttons[kind].hover.border};
        background-color: ${buttons[kind].hover.background};
        ${isActiveNotToggle && "pointer-events: none;"}
        svg {
            fill: ${buttons[kind].hover.color};
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
