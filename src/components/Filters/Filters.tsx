import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import { setFilterType } from "features/todo/todoSlice"
import { filterTypeSelector } from "features/todo/selectors"
import { FilterTypes } from "features/todo/types"
import ThemeButton from "UI/Buttons/ThemeButton"
import styles from "./styles"

const Filter = ({ className }: { className?: string }) => {
  const dispatch = useAppDispath()
  const filterType = useAppSelector(filterTypeSelector)

  const changeFilterHandler = (type: FilterTypes) => {
    dispatch(setFilterType(type))
  }

  return (
    <div className={className}>
      <ThemeButton isActive={filterType === "all"} onClick={() => changeFilterHandler("all")}>
        All
      </ThemeButton>

      <ThemeButton
        isActive={filterType === "important"}
        kind="warn"
        onClick={() => changeFilterHandler("important")}
      >
        Important
      </ThemeButton>

      <ThemeButton
        isActive={filterType === "done"}
        kind="success"
        onClick={() => changeFilterHandler("done")}
      >
        Done
      </ThemeButton>
    </div>
  )
}

export default styled(Filter)`
  ${styles}
`
