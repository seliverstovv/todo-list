import { useAppDispath, useAppSelector } from "store/hooks"
import { setFilterType } from "features/todoSlice"
import { filterTypeSelector } from "features/selectors"
import BorderButton from "UI/BorderButton"
import { FilterTypes } from "features/types"

const FilterPanel = () => {
  const dispatch = useAppDispath()
  const filterType = useAppSelector(filterTypeSelector)

  const changeFilterHandler = (type: FilterTypes) => {
    dispatch(setFilterType(type))
  }

  return (
    <div>
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

export default FilterPanel
