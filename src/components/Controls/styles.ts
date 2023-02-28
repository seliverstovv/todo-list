import { css } from "@emotion/react"

export default () => {
    return css`
        & {
            .filters {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 2.4rem;
                @media screen and (max-width: 660px) {
                    flex-flow: column-reverse;
                    align-items: center;
                    label {
                        margin-bottom: 2rem;
                        width: 100%;
                    }
                }
            }

            .controls {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                @media screen and (max-width: 400px) {
                    justify-content: center;
                }
            }

            .title {
                margin-right: auto;
                @media screen and (max-width: 400px) {
                    display: none;
                }
            }

            .search {
                width: 50%;
            }

            .add-task {
                margin-right: 1rem;
            }
        }
    `
}
