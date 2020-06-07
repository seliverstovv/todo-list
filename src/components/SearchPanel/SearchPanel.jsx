import React, { useState, useEffect } from 'react'
import FilterPanel from '../FilterPanel'
import style from './SearchPanel.module.scss'

const SearchPanel = ({
  onFilter,
  stateFilter,
  onSearch
}) => {


  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    onSearch(inputValue)
  }, [inputValue, onSearch])

  const onInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)
  }

  return (
    <div className={style.wrapper}>
      <FilterPanel onFilter={onFilter} stateFilter={stateFilter} />

      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        className={style.input}
        placeholder="search"
      />
    </div>
  )
}

export default SearchPanel