import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import { setFilterType } from "features/todo/todoSlice"
import { filterTypeSelector } from "features/todo/selectors"
import { FilterTypes } from "features/todo/types"
import BorderButton from "UI/Buttons/BorderButton"
import styles from "./styles"

const Filter = ({ className }: { className?: string }) => {
  const dispatch = useAppDispath()
  const filterType = useAppSelector(filterTypeSelector)

  const changeFilterHandler = (type: FilterTypes) => {
    dispatch(setFilterType(type))
  }

  return (
    <div className={className}>
      <BorderButton isActive={filterType === "all"} onClick={() => changeFilterHandler("all")}>
        All
      </BorderButton>

      <BorderButton
        isActive={filterType === "important"}
        kind="warn"
        onClick={() => changeFilterHandler("important")}
      >
        Important
      </BorderButton>

      <BorderButton
        isActive={filterType === "done"}
        kind="success"
        onClick={() => changeFilterHandler("done")}
      >
        Done
      </BorderButton>
    </div>
  )
}

export default styled(Filter)`
  ${styles}
`
