import { useState } from "react"
import styled from "@emotion/styled"
import { AsyncError } from "features/todo/types"
import Modal from "UI/Modal"
import Typography from "UI/Typography"
import Paper from "UI/Paper"
import ThemeButton from "UI/Buttons/ThemeButton"
import styles from "./styles"

const ErrorPopup = ({ error, className }: { error?: AsyncError; className?: string }) => {
  const [isError, setIsError] = useState(Boolean(error))

  return (
    <Modal isOpened={isError} onClose={() => setIsError(false)}>
      <Paper className={className}>
        <Typography className="text">
          Service JSON Placeholder is not responding. Looks like you need to manually create the first
          tasks{` ;)`}
        </Typography>
        <ThemeButton kind="fill" onClick={() => setIsError(false)}>
          Close
        </ThemeButton>
      </Paper>
    </Modal>
  )
}

export default styled(ErrorPopup)`
  ${styles}
`
