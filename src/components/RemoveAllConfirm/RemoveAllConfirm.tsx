/** @jsxImportSource @emotion/react */
import { useAppDispath, useAppSelector } from "store/hooks"
import { isVisibleRemoveAllSelector } from "features/selectors"
import { toggleVisibleModal, removeAll } from "features/todoSlice"
import Modal from "UI/Modal"
import Typography from "UI/Typography"
import Paper from "UI/Paper"
import { css } from "@emotion/react"
import BorderButton from "UI/Buttons/BorderButton"

const RemoveAllConfirm = () => {
  const dispatch = useAppDispath()
  const isVisibleRemoveAll = useAppSelector(isVisibleRemoveAllSelector)

  const toggleVisibleModalHandler = () => {
    dispatch(toggleVisibleModal("isVisibleRemoveAll"))
  }

  const removeAllHandler = () => {
    dispatch(removeAll())
    toggleVisibleModalHandler()
  }

  return (
    <Modal isOpened={isVisibleRemoveAll} onClose={toggleVisibleModalHandler}>
      <Paper>
        <Typography
          css={css`
            margin-bottom: 2rem;
          `}
        >
          Are you shure?
        </Typography>
        <div
          css={css`
            display: flex;
            button {
              margin: 0 1rem;
            }
          `}
        >
          <BorderButton kind="warn" onClick={removeAllHandler}>
            Delete
          </BorderButton>
          <BorderButton kind="success" onClick={toggleVisibleModalHandler}>
            Cancel
          </BorderButton>
        </div>
      </Paper>
    </Modal>
  )
}

export default RemoveAllConfirm
