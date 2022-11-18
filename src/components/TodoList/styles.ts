import { css } from "@emotion/react"

export default () => {
  return css`
    & {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 3.2rem 0;

      .list {
        width: 100%;
      }

      .item {
        margin-bottom: 3rem;
      }
    }
  `
}
