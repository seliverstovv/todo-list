import { css } from "@emotion/react"
import resetStyles from "UI/resetStyles"
import { ThemeType } from "UI/_theme"

export const getGlobalStyles = ({ colors }: ThemeType) => css`
    ${resetStyles}
    html {
        font-size: 62.5%;
        font-family: "Roboto", sans-serif;
    }

    body {
        background-color: ${colors.backgrounds.c};
        transition: background-color 0.1s ease;
    }
`

export default () => {
    return css`
        & {
            max-width: 85rem;
            padding: 2rem 3rem;
            margin: 0 auto;

            .loading {
                height: 60vh;
            }
        }
    `
}
