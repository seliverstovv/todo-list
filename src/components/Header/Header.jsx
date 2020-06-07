import React from 'react'
import style from './Header.module.scss'

const Header = ({ leftToDo, countDone }) => {
  return (
    <header className={style.header}>
      <h1>My Todo List</h1>
      <h2>{leftToDo} more to do, {countDone} done</h2>
    </header>
  )
}

export default Header