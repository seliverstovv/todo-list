import { css } from "@emotion/react"

export default () => {
  return css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 2rem 0;

    @media screen and (max-width: 400px) {
      flex-flow: column;
      .title {
        margin-bottom: 1.2rem;
      }
    }
  `
}
