import styled from "@emotion/styled"
import styles from "./styles"

import { TypographyProps } from "./types"

const Typography = ({ tag = "p", className, children }: TypographyProps) => {
    const Tag = tag
    return <Tag className={className}>{children}</Tag>
}

export default styled(Typography)`
    ${styles}
`
