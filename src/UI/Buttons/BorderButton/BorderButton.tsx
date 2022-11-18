import styled from "@emotion/styled"
import BaseButton from "UI/Buttons/BaseButton"
import { BorderButtonProps } from "./types"
import styles from "./styles"

const BorderButton = (props: BorderButtonProps) => {
  const { children, kind, isActive, ...rest } = props

  return <BaseButton {...rest}>{children}</BaseButton>
}

export default styled(BorderButton)`
  ${styles}
`
