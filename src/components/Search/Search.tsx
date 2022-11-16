import { useAppDispath, useAppSelector } from "store/hooks"
import { searchValueSelector } from "features/selectors"
import { setSearchValue } from "features/todoSlice"
import TextInput from "UI/Inputs/TextInput"
import { ChangeEvent } from "react"
import { ReactComponent as SearchIcon } from "./search.svg"

const Search = ({ className }: { className?: string }) => {
  const dispatch = useAppDispath()
  const searchValue = useAppSelector(searchValueSelector)

  const searcValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value))
  }

  return (
    <TextInput
      icon={<SearchIcon />}
      value={searchValue}
      onChange={searcValueHandler}
      label="Search"
      className={className}
    />
  )
}

export default Search
