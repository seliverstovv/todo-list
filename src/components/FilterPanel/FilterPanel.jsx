import React from 'react'
import style from './FilterPanel.module.scss'
import Button from '../Button'

const FilterPanel = ({ onFilter, stateFilter }) => {
  return (
    <div className={style.wrapper}>
      <Button
        onClick={() => onFilter('all')}
        text="All"
        isActive={stateFilter === 'all'}
      />

      <Button
        onClick={() => onFilter('active')}
        text="Active"
        isActive={stateFilter === 'active'}
      />

      <Button
        onClick={() => onFilter('done')}
        text="Done"
        isActive={stateFilter === 'done'}
      />
    </div>
  )
}

export default FilterPanel