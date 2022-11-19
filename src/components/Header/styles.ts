import { css } from "@emotion/react"

export default () => {
  return css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 2rem 0;

    @media screen and (max-width: 450px) {
      flex-flow: column;
      .title {
        margin-bottom: 1.2rem;
      }
    }

    .mode {
      display: flex;
      align-items: center;
      align-self: flex-start;
    }

    .mode-text {
      margin-left: 1rem;
    }
  `
}
