import styled from "@emotion/styled"
import styles from "./styles"
import { TextInputProps } from "./types"

const TextInput = ({
  value,
  onChange,
  label,
  icon,
  className,
  disabled = false,
  error = null,
}: TextInputProps) => {
  return (
    <label className={className}>
      <div className="placeholder">
        {icon && <span className="icon">{icon}</span>}
        <input
          value={value}
          onChange={onChange}
          autoComplete="off"
          type="text"
          disabled={disabled}
          className="input"
        />
        <span className="label">{error || label}</span>
      </div>
    </label>
  )
}

export default styled(TextInput)`
  ${styles}
`
