/** @jsxImportSource @emotion/react */
import { useState } from "react"
import { AsyncError } from "features/types"
import Modal from "UI/Modal"
import Typography from "UI/Typography"
import Paper from "UI/Paper"
import FillButton from "UI/Buttons/FillButton"
import { css } from "@emotion/react"

const ErrorPopup = ({ error }: { error?: AsyncError }) => {
  const [isError, setIsError] = useState(Boolean(error))
  return (
    <Modal isOpened={isError} onClose={() => setIsError(false)}>
      <Paper
        css={css`
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <Typography
          css={css`
            text-align: center;
            margin-bottom: 2.4rem;
          `}
        >
          Service JSON Placeholder is not responding. Looks like you need to manually create the first
          tasks{` ;)`}
        </Typography>
        <FillButton onClick={() => setIsError(false)}>Close</FillButton>
      </Paper>
    </Modal>
  )
}

export default ErrorPopup
