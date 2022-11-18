import styled from "@emotion/styled"
import BaseButton from "UI/Buttons/BaseButton"
import { FillButtonProps } from "./types"
import styles from "./styles"

const FillButton = (props: FillButtonProps) => {
  const { color, children, className, ...rest } = props

  return (
    <BaseButton className={className} {...rest}>
      {children}
    </BaseButton>
  )
}

export default styled(FillButton)`
  ${styles}
`
