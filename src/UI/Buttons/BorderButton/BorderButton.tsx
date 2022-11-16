import styled from "@emotion/styled"
import BaseButton from "UI/Buttons/BaseButton"
import styles from "./styles"
import { BorderButtonProps } from "./types"

const BorderButton = (props: BorderButtonProps) => {
  const { children, kind, isActive, ...rest } = props

  return <BaseButton {...rest}>{children}</BaseButton>
}

export default styled(BorderButton)`
  ${styles}
`
