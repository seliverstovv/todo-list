import styled from "@emotion/styled"
import { ButtonProps } from "./types"
import baseStyles from "./baseStyles"
import themeStyles from "./themeStyles"

const Button = ({ onClick, children, className, type = "button", disabled = false }: ButtonProps) => {
    return (
        <button className={className} onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    )
}

export default styled(Button)`
    ${baseStyles}
    ${themeStyles}
`
