import { css } from "@emotion/react"

export default () => {
    return css`
        & {
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;

            .text {
                text-align: center;
                margin-bottom: 2.4rem;
            }
        }
    `
}
