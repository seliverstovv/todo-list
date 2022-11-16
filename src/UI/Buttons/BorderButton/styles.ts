import { css } from "@emotion/react"
import { ThemeProps } from "theme"
import { BorderButtonProps } from "./types"

export default ({
  theme: { colors },
  isActive,
  isToggle = false,
  kind = "default",
}: ThemeProps & BorderButtonProps) => {
  const getKindStyles = () => {
    switch (kind) {
      case "default":
        return css`
          color: ${colors.primary.main};
          border: 0.1rem solid ${colors.primary.accent.c};
          background-color: ${isActive ? colors.primary.accent.c : "tranparent"};
          svg {
            fill: ${colors.primary.main};
          }
          &:hover {
            background-color: ${colors.primary.accent.c};
            filter: brightness(${isToggle && isActive ? "120%" : "100%"});
          }
        `
      case "success":
        return css`
          color: ${isActive ? colors.secondary.a : colors.primary.main};
          border: 0.1rem solid ${colors.primary.accent.d};
          background-color: ${isActive ? colors.primary.accent.d : "tranparent"};
          svg {
            fill: ${isActive ? colors.secondary.a : colors.primary.main};
          }
          &:hover {
            color: ${colors.secondary.a};
            background-color: ${colors.primary.accent.d};
            filter: brightness(${isToggle && isActive ? "120%" : "100%"});
            svg {
              fill: ${colors.secondary.a};
            }
          }
        `
      case "warn":
        return css`
          color: ${colors.primary.main};
          border: 0.1rem solid ${colors.primary.accent.b};
          background-color: ${isActive ? colors.primary.accent.b : "tranparent"};
          svg {
            fill: ${colors.primary.main};
          }
          &:hover {
            background-color: ${colors.primary.accent.b};
            filter: brightness(${isToggle && isActive ? "120%" : "100%"});
          }
        `
      default:
        return ""
    }
  }

  return css`
    & {
      pointer-events: ${isActive && !isToggle ? "none" : "all"};
      background-color: transparent;
      svg {
        fill: ${colors.primary.main};
      }
      ${getKindStyles()}
    }
  `
}
