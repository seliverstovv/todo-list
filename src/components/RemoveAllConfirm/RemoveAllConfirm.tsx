import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import { removeAll } from "features/todo/todoSlice"
import { modalSelector } from "features/UI/selectors"
import { setModal } from "features/UI/UISlice"
import Modal from "UI/Modal"
import Typography from "UI/Typography"
import Paper from "UI/Paper"
import Button from "UI/Button"
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
                    <Button kind="warn" onClick={removeAllHandler}>
                        Delete
                    </Button>
                    <Button kind="success" onClick={closeModalHandler}>
                        Cancel
                    </Button>
                </div>
            </Paper>
        </Modal>
    )
}

export default styled(RemoveAllConfirm)`
    ${styles}
`
