import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import { removeAll } from "features/todo/todoSlice"
import { modalSelector } from "features/UI/selectors"
import { setModal } from "features/UI/UISlice"
import Modal from "UI/Modal"
import Typography from "UI/Typography"
import Paper from "UI/Paper"
import ThemeButton from "UI/Buttons/ThemeButton"
import styles from "./styles"

const RemoveAllConfirm = ({ className }: { className?: string }) => {
  const dispatch = useAppDispath()
  const modal = useAppSelector(modalSelector)

  const closeModalHandler = () => {
    dispatch(setModal(null))
  }

  const removeAllHandler = () => {
    dispatch(removeAll())
    closeModalHandler()
  }

  return (
    <Modal isOpened={modal === "isVisibleRemoveAll"} onClose={closeModalHandler}>
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
