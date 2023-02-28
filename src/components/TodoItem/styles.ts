import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"
import { TodoItemProps } from "./types"

export default ({ theme, important, done }: ThemeProps & TodoItemProps) => {
    const { colors, fonts, radius } = theme

    const baseStyes = css`
        border: 0.1rem solid ${colors.elements.e};
    `

    const importantStyles = css`
        border: 0.1rem solid ${colors.elements.b};
    `

    const doneStyles = css`
        background-color: ${colors.backgrounds.b};
        border: 0.1rem solid ${colors.backgrounds.b};
        p {
            color: ${fonts.colors.hint};
        }
    `

    return css`
        & {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items: flex-start;
            border-radius: ${radius.paper};
            padding: 1rem 2rem;
            background-color: ${colors.backgrounds.d};

            ${baseStyes}
            ${important && importantStyles}
      ${done && doneStyles}

      .buttons {
                display: flex;
                @media screen and (max-width: 600px) {
                    padding-bottom: 1.2rem;
                    border-bottom: 0.1rem solid ${colors.elements.b};
                    margin-bottom: 1.2rem;
                }
                button:not(:last-of-type) {
                    margin-right: 1rem;
                }
            }

            .title {
                margin-right: 2.4rem;
            }

            .header {
                display: flex;
                justify-content: space-between;
                flex-flow: column-reverse;
                width: 100%;
                padding: 0.8rem;
                margin-bottom: 0.8rem;
                @media screen and (min-width: 600px) {
                    flex-flow: row;
                }
            }

            .description {
                width: 100%;
                overflow-wrap: break-word;
                padding: 1.4rem 1.8rem 1.8rem 1.8rem;
                border-top: 0.1rem solid ${colors.elements.c};
            }
        }
    `
}
