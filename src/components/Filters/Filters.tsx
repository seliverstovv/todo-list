/** @jsxImportSource @emotion/react */
import { useAppDispath, useAppSelector } from "store/hooks"
import { setFilterType } from "features/todoSlice"
import { filterTypeSelector } from "features/selectors"
import BorderButton from "UI/Buttons/BorderButton"
import { FilterTypes } from "features/types"
import { css } from "@emotion/react"

const Filter = () => {
  const dispatch = useAppDispath()
  const filterType = useAppSelector(filterTypeSelector)

  const changeFilterHandler = (type: FilterTypes) => {
    dispatch(setFilterType(type))
  }

  const styles = css`
    display: flex;
    align-items: center;
    button:not(:last-of-type) {
      margin-right: 2rem;
    }
  `

  return (
    <div css={styles}>
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

export default Filter
