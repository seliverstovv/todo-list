import styled from "@emotion/styled"
import { useRef } from "react"
import baseStyles from "UI/Inputs/baseInputStyles"
import styles from "UI/Inputs/Textarea/styles"
import useAutosizeTextArea from "UI/_hooks/useTextareaAutoSize"
import { TextAreaProps } from "./types"

const Textarea = ({ value, onChange, label, rows, className }: TextAreaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useAutosizeTextArea(textAreaRef.current, value)

  return (
    <label className={className}>
      <div className="placeholder">
        <textarea
          ref={textAreaRef}
          value={value}
          onChange={onChange}
          autoComplete="off"
          className="input"
          rows={rows}
          name="description textarea"
        >
          {value}
        </textarea>
        <span className="label">{label}</span>
      </div>
    </label>
  )
}

export default styled(Textarea)`
  ${baseStyles}
  ${styles}
`
