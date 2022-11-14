/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react"
import BaseButton from "UI/BaseButton"
import { FillButtonProps } from "./types"

const FillButton = (props: FillButtonProps) => {
  const { color, children, ...rest } = props
  const { colors } = useTheme()

  const styles = css`
    border: 0.1rem solid ${colors.secondary.c};
    background-color: ${colors.secondary.c};
    color: ${colors.primary.main};
    &:hover {
      border: 0.1rem solid ${colors.secondary.d};
      background-color: ${colors.secondary.d};
    }
  `

  return (
    <BaseButton css={styles} {...rest}>
      {children}
    </BaseButton>
  )
}

export default FillButton
