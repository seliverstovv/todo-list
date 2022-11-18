import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import { todoItemsCountsSelector } from "features/todo/selectors"
import { toggleVisibleModal } from "features/UI/UISlice"
import BorderButton from "UI/Buttons/BorderButton"
import Typography from "UI/Typography"
import Filter from "components/Filters"
import Search from "components/Search"
import TaskForm from "components/TaskForm"
import RemoveAllConfirm from "components/RemoveAllConfirm"
import styles from "./styles"

const Controls = ({ className }: { className?: string }) => {
  const dispatch = useAppDispath()
  const { totalCount } = useAppSelector(todoItemsCountsSelector)

  const visibleAddTaskHandler = () => {
    dispatch(toggleVisibleModal("isVisibleTaskForm"))
  }

  const visibleRemoveAllHandler = () => {
    dispatch(toggleVisibleModal("isVisibleRemoveAll"))
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
        <BorderButton className="add-task" onClick={visibleAddTaskHandler} kind="success" type="button">
          Add task
        </BorderButton>

        <BorderButton disabled={!totalCount} onClick={visibleRemoveAllHandler} kind="warn" type="button">
          Clear all
        </BorderButton>
      </div>

      <TaskForm />
      <RemoveAllConfirm />
    </div>
  )
}

export default styled(Controls)`
  ${styles}
`
