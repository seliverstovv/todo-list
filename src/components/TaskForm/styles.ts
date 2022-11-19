import { css } from "@emotion/react"

export default () => {
  return css`
    & {
      max-width: 50rem;
      width: 100%;

      .paper {
        width: 100%;
      }

      .title {
        margin-bottom: 2.4rem;
      }

      .text-input {
        margin-bottom: 1.4rem;
      }

      .textarea {
        margin-bottom: 2.4rem;
      }

      .buttons {
        display: flex;
        button:first-of-type {
          margin-right: 1.2rem;
        }
      }
    }
  `
}
