import React from 'react'
import style from './Button.module.scss'
import cn from 'classnames'

const Button = ({ text, onClick, isActive, type = 'button' }) => {
  const classes = cn({
    [style.button]: true,
    [style.active]: isActive,
    [style.submit]: type === 'submit'
  })

  return (
    <button
      onClick={onClick}
      className={classes}
      tabIndex={isActive ? '-1' : null}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button