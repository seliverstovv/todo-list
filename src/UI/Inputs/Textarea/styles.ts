import { css } from "@emotion/react"
import { ThemeProps } from "UI/_theme"
import { TextAreaProps } from "../types"

export default ({ value }: ThemeProps & TextAreaProps) => {
    const isEmptyValue = value?.trim().length === 0

    return css`
        & {
            display: flex;
            flex-flow: column;

            .label {
                transform: translateY(-50%);
                top: ${isEmptyValue ? "2rem" : "0"};
                left: 1.6rem;
            }

            .input {
                padding: 1.6rem;
                min-height: 9.6rem;
            }
        }
    `
}
