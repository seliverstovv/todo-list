import styled from "@emotion/styled"
import styles from "./styles"
import { LoaderProps } from "./types"

const Ring = ({ className }: LoaderProps) => {
  return (
    <div className={className}>
      <div />
      <div />
    </div>
  )
}

export default styled(Ring)`
  ${styles}
`
