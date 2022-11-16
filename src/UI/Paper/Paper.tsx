/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react"
import { ReactNode } from "react"

const Paper = ({ children, className }: { children: ReactNode; className?: string }) => {
  const { colors, radius } = useTheme()

  const styles = css`
    padding: 3.2rem 4.2rem;
    background-color: ${colors.secondary.d};
    border-radius: ${radius.paper};
  `

  return (
    <div className={className} css={styles}>
      {children}
    </div>
  )
}

export default Paper
