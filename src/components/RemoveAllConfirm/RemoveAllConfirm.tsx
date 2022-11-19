import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import { removeAll } from "features/todo/todoSlice"
import { isVisibleRemoveAllSelector } from "features/UI/selectors"
import { closeModal } from "features/UI/UISlice"
import Modal from "UI/Modal"
import Typography from "UI/Typography"
import Paper from "UI/Paper"
import ThemeButton from "UI/Buttons/ThemeButton"
import styles from "./styles"

const RemoveAllConfirm = ({ className }: { className?: string }) => {
  const dispatch = useAppDispath()
  const isVisibleRemoveAll = useAppSelector(isVisibleRemoveAllSelector)

  const closeModalHandler = () => {
    dispatch(closeModal("isVisibleRemoveAll"))
  }

  const removeAllHandler = () => {
    dispatch(removeAll())
    closeModalHandler()
  }

  return (
    <Modal isOpened={isVisibleRemoveAll} onClose={closeModalHandler}>
      <Paper className={className}>
        <Typography className="title">Are you shure?</Typography>
        <div className="buttons">
          <ThemeButton kind="warn" onClick={removeAllHandler}>
            Delete
          </ThemeButton>
          <ThemeButton kind="success" onClick={closeModalHandler}>
            Cancel
          </ThemeButton>
        </div>
      </Paper>
    </Modal>
  )
}

export default styled(RemoveAllConfirm)`
  ${styles}
`
