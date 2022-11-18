import { css } from "@emotion/react"

export default () => {
  return css`
    & {
      .title {
        margin-bottom: 2rem;
      }

      .buttons {
        display: flex;
        button {
          margin: 0 1rem;
        }
      }
    }
  `
}
