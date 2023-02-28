import styled from "@emotion/styled"
import styles from "./styles"
import { PaperProps } from "./types"

const Paper = ({ children, className }: PaperProps) => {
    return <div className={className}>{children}</div>
}

export default styled(Paper)`
    ${styles}
`
