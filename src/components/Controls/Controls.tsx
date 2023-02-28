import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import { todoItemsCountsSelector } from "features/todo/selectors"
import { setModal } from "features/UI/UISlice"
import Button from "UI/Button"
import Typography from "UI/Typography"
import Filter from "components/Filters"
import Search from "components/Search"
import TaskForm from "components/TaskForm"
import RemoveAllConfirm from "components/RemoveAllConfirm"
import styles from "./styles"

const Controls = ({ className }: { className?: string }) => {
    const dispatch = useAppDispath()
    const { totalCount } = useAppSelector(todoItemsCountsSelector)

    const openAddTaskHandler = () => {
        dispatch(setModal("isVisibleTaskForm"))
    }

    const openRemoveAllHandler = () => {
        dispatch(setModal("isVisibleRemoveAll"))
    }

    return (
        <div className={className}>
            <div className="filters">
                <Filter />

                <Search className="search" />
            </div>

            <div className="controls">
                <Typography size="xxxl" tag="h1" className="title">
                    Tasks:
                </Typography>
                <Button className="add-task" onClick={openAddTaskHandler} kind="success" type="button">
                    Add task
                </Button>

                <Button disabled={!totalCount} onClick={openRemoveAllHandler} kind="warn" type="button">
                    Clear all
                </Button>
            </div>

            <TaskForm />
            <RemoveAllConfirm />
        </div>
    )
}

export default styled(Controls)`
    ${styles}
`
