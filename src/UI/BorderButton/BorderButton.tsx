/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react"
import BaseButton from "UI/BaseButton"
import { BorderButtonType } from "./types"

const BorderButton = (props: BorderButtonType) => {
  const { children, kind = "default", isActive = false, ...rest } = props
  const { colors } = useTheme()

  const getKindStyles = () => {
    switch (kind) {
      case "default":
        return css`
          background-color: ${colors.primary.accent.c};
          svg {
            fill: ${colors.primary.main};
          }
        `
      case "success":
        return css`
          background-color: ${colors.primary.accent.d};
          color: ${colors.secondary.a};
          svg {
            fill: ${colors.secondary.a};
          }
        `
      case "warn":
        return css`
          background-color: ${colors.primary.accent.b};
          svg {
            fill: ${colors.primary.main};
          }
        `
      default:
        return ""
    }
  }

  const styles = css`
    color: ${colors.primary.main};
    border: 0.1rem solid ${colors.primary.deep};
    background-color: transparent;
    svg {
      fill: ${colors.primary.main};
    }
    &:hover {
      ${getKindStyles()}
    }
    ${isActive && getKindStyles()}
  `

  return (
    <BaseButton css={styles} {...rest}>
      {children}
    </BaseButton>
  )
}

export default BorderButton
