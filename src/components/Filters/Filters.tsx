import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import { setFilterType } from "features/todo/todoSlice"
import { filterTypeSelector } from "features/todo/selectors"
import { FilterTypes } from "features/todo/types"
import Button from "UI/Button"
import styles from "./styles"

const Filter = ({ className }: { className?: string }) => {
  const dispatch = useAppDispath()
  const filterType = useAppSelector(filterTypeSelector)

  const changeFilterHandler = (type: FilterTypes) => {
    dispatch(setFilterType(type))
  }

  return (
    <div className={className}>
      <Button isActive={filterType === "all"} onClick={() => changeFilterHandler("all")}>
        All
      </Button>

      <Button
        isActive={filterType === "important"}
        kind="warn"
        onClick={() => changeFilterHandler("important")}
      >
        Important
      </Button>

      <Button
        isActive={filterType === "done"}
        kind="success"
        onClick={() => changeFilterHandler("done")}
      >
        Done
      </Button>
    </div>
  )
}

export default styled(Filter)`
  ${styles}
`
