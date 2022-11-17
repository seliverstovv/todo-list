import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { HTMLAttributes } from "react"
import styles from "./styles"

export type Props = {
  size?: number
} & HTMLAttributes<HTMLDivElement>

const Ring = ({ size = 80, className }: Props) => {
  const { colors } = useTheme()
  const circles = [...Array(4)].map((_, index) => {
    return (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        style={{
          borderColor: `${colors.primary.deep} transparent transparent transparent`,
          width: size * 0.8,
          height: size * 0.8,
          margin: size * 0.1,
          borderWidth: size * 0.1,
        }}
      />
    )
  })

  return (
    <div className={className} style={{ width: size, height: size }}>
      {circles}
    </div>
  )
}

export default styled(Ring)`
  ${styles}
`
