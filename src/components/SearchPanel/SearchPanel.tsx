import { useAppDispath, useAppSelector } from "store/hooks"
import { searchValueSelector } from "features/selectors"
import { setSearchValue } from "features/todoSlice"
import TextInput from "UI/TextInput"
import FilterPanel from "components/FilterPanel"
import { ChangeEvent } from "react"
import { ReactComponent as SearchIcon } from "./search.svg"

const SearchPanel = () => {
  const dispatch = useAppDispath()
  const searchValue = useAppSelector(searchValueSelector)

  const searcValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value))
  }

  return (
    <div>
      <FilterPanel />

      <TextInput
        icon={<SearchIcon />}
        value={searchValue}
        onChange={searcValueHandler}
        label="Search"
      />
    </div>
  )
}

export default SearchPanel
