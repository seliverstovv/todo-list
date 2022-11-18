import { css } from "@emotion/react"

export default () => {
  return css`
    & {
      display: flex;
      align-items: center;
      button:not(:last-of-type) {
        margin-right: 2rem;
      }
    }
  `
}
