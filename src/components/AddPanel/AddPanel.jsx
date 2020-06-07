import React, { useState } from 'react'
import Button from '../Button'
import style from './AddPanel.module.scss'

const AddPanel = ({ onAdd, onClearAll }) => {
  const [inputValue, setInputValue] = useState('')

  const onChange = (event) => {
    console.log(event.target.value)
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    onAdd(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit} className={style.wrapper}>
      <input
        onChange={onChange}
        value={inputValue}
        className={style.input}
        placeholder="Inter you task"
        required
      />
      <Button text="Add" type="submit" />
      <Button onClick={onClearAll} text="Clear all" type="button" />
    </form>
  )
}

export default AddPanel