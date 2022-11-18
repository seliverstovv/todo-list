import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import { removeAll } from "features/todo/todoSlice"
import { isVisibleRemoveAllSelector } from "features/UI/selectors"
import { toggleVisibleModal } from "features/UI/UISlice"
import Modal from "UI/Modal"
import Typography from "UI/Typography"
import Paper from "UI/Paper"
import BorderButton from "UI/Buttons/BorderButton"
import styles from "./styles"

const RemoveAllConfirm = ({ className }: { className?: string }) => {
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
      <Paper className={className}>
        <Typography className="title">Are you shure?</Typography>
        <div className="buttons">
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

export default styled(RemoveAllConfirm)`
  ${styles}
`
