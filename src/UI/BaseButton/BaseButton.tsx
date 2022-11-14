import styled from "@emotion/styled"
import { BaseButtonProps } from "UI/types"
import styles from "./styles"

const Button = ({
  onClick,
  children,
  className,
  type = "button",
  disabled = false,
}: BaseButtonProps) => {
  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

export default styled(Button)`
  ${styles}
`
