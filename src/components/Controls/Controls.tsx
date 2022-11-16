/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useAppDispath, useAppSelector } from "store/hooks"
import { toggleVisibleModal } from "features/todoSlice"
import { todoItemsCountsSelector } from "features/selectors"
import BorderButton from "UI/Buttons/BorderButton"
import Filter from "components/Filters"
import Search from "components/Search"
import TaskForm from "components/TaskForm"
import RemoveAllConfirm from "components/RemoveAllConfirm"

const Controls = () => {
  const dispatch = useAppDispath()
  const { totalCount } = useAppSelector(todoItemsCountsSelector)

  const filterStyles = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.4rem;
  `

  const controlStyles = css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `

  const visibleAddTaskHandler = () => {
    dispatch(toggleVisibleModal("isVisibleAddTask"))
  }

  const visibleRemoveAllHandler = () => {
    dispatch(toggleVisibleModal("isVisibleRemoveAll"))
  }

  return (
    <>
      <div css={filterStyles}>
        <Filter />

        <Search
          css={css`
            width: 50%;
          `}
        />
      </div>

      <div css={controlStyles}>
        <BorderButton
          css={css`
            margin-right: 1rem;
          `}
          onClick={visibleAddTaskHandler}
          kind="success"
          type="button"
        >
          Add task
        </BorderButton>

        <BorderButton disabled={!totalCount} onClick={visibleRemoveAllHandler} kind="warn" type="button">
          Clear all
        </BorderButton>
      </div>

      <TaskForm />
      <RemoveAllConfirm />
    </>
  )
}

export default Controls
