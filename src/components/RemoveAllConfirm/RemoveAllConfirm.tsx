import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import { removeAll } from "features/todo/todoSlice"
import { isVisibleRemoveAllSelector } from "features/UI/selectors"
import { closeModal } from "features/UI/UISlice"
import Modal from "UI/Modal"
import Typography from "UI/Typography"
import Paper from "UI/Paper"
import BorderButton from "UI/Buttons/BorderButton"
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
          <BorderButton kind="warn" onClick={removeAllHandler}>
            Delete
          </BorderButton>
          <BorderButton kind="success" onClick={closeModalHandler}>
            Cancel
          </BorderButton>
        </div>
      </Paper>
    </Modal>
  )
}

export default styled(RemoveAllConfirm)`
  ${styles}
`
