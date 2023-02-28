import styled from "@emotion/styled"
import { useRef } from "react"
import baseStyles from "UI/Inputs/baseInputStyles"
import styles from "UI/Inputs/Textarea/styles"
import Typography from "UI/Typography"
import useAutosizeTextArea from "UI/_hooks/useTextareaAutoSize"
import { TextAreaProps } from "../types"

const Textarea = ({
    value,
    onChange,
    label,
    error,
    maxLength,
    rows,
    name,
    className,
}: TextAreaProps) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    useAutosizeTextArea(textAreaRef.current, value)

    return (
        <label className={className}>
            <div className="wrapper">
                <textarea
                    name={name}
                    ref={textAreaRef}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                    className="input"
                    rows={rows}
                >
                    {value}
                </textarea>
                <span className="label">{label}</span>
            </div>
            <Typography tag="span" className="error">
                {error && error} {maxLength && `${maxLength} / ${value.length}`}
            </Typography>
        </label>
    )
}

export default styled(Textarea)`
    ${baseStyles}
    ${styles}
`
