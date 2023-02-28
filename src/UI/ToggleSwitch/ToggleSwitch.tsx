import styled from "@emotion/styled"
import styles from "./styles"
import { ToggleSwitchProps } from "./types"

const ToggleSwitch = ({ checked, onChange, className, name, disabled = false }: ToggleSwitchProps) => {
    return (
        <label className={className}>
            <input
                className="original"
                type="checkbox"
                checked={checked}
                onChange={onChange}
                name={name}
                disabled={disabled}
                hidden
            />
            <div className="styled" />
        </label>
    )
}

export default styled(ToggleSwitch)`
    ${styles}
`
