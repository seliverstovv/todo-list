/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useAppDispath, useAppSelector } from "store/hooks"
import { toggleVisibleModal } from "features/todoSlice"
import { todoItemsCountsSelector } from "features/selectors"
import BorderButton from "UI/Buttons/BorderButton"
import Typography from "UI/Typography"
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
    @media screen and (max-width: 660px) {
      flex-flow: column-reverse;
      align-items: center;
      label {
        margin-bottom: 2rem;
        width: 100%;
      }
    }
  `

  const controlStyles = css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 400px) {
      justify-content: center;
    }
  `

  const visibleAddTaskHandler = () => {
    dispatch(toggleVisibleModal("isVisibleTaskForm"))
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
        <Typography
          size="xxxl"
          tag="h1"
          css={css`
            margin-right: auto;
            @media screen and (max-width: 400px) {
              display: none;
            }
          `}
        >
          Tasks:
        </Typography>
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