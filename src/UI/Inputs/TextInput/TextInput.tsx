import styled from "@emotion/styled"
import Typography from "UI/Typography"
import styles from "./styles"
import baseStyles from "../baseInputStyles"
import { TextInputProps } from "../types"

const TextInput = ({
  value,
  onChange,
  label,
  icon,
  className,
  name,
  error,
  disabled = false,
}: TextInputProps) => {
  return (
    <label className={className}>
      <div className="placeholder">
        {icon && <span className="icon">{icon}</span>}
        <input
          name={name}
          value={value}
          onChange={onChange}
          autoComplete="off"
          type="text"
          disabled={disabled}
          className="input"
        />
        <span className="label">{label}</span>
      </div>
      {error && (
        <Typography tag="span" className="error">
          {error}
        </Typography>
      )}
    </label>
  )
}

export default styled(TextInput)`
  ${styles}
  ${baseStyles}
`
