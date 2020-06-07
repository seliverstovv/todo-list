import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from '../Header'
import SearchPanel from '../SearchPanel'
import TodoList from '../TodoList'
import AddPanel from '../AddPanel'
import style from './App.module.scss'

const App = () => {
  const initialTodoData = JSON.parse(localStorage.getItem('todoData')) || []
  const initialFilterState = localStorage.getItem('filterState') || 'all'

  const [todoData, setTodoData] = useState(initialTodoData)
  const [searchValue, setSearchValue] = useState('')
  const [stateFilter, setStateFilter] = useState(initialFilterState)

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todoData))
    localStorage.setItem('filterState', stateFilter)
  }, [todoData, stateFilter])

  const findCurrentIndex = (arr, id) => {
    return arr.findIndex(item => item.id === id)
  }

  const toggleProperty = (arr, id, propName) => {
    const index = findCurrentIndex(arr, id)
    const oldItem = arr[index]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }
    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ]
  }

  const onAddItem = (value) => {
    setTodoData(prevState => {
      return [
        ...prevState,
        {
          label: value,
          done: false,
          important: false,
          id: uuidv4()
        }
      ]
    })
  }

  const onDeleteItem = (id) => {
    setTodoData(prevState => {
      const index = findCurrentIndex(prevState, id)

      return [
        ...prevState.slice(0, index),
        ...prevState.slice(index + 1)
      ]
    })
  }

  const onClearAll = () => {
    if (window.confirm("Clear task list?")) {
      setTodoData([])
    }
  }

  const onToggleDone = (id) => {
    setTodoData(prevState => (
      toggleProperty(prevState, id, 'done')
    ))
  }

  const onToggleImportant = (id) => {
    setTodoData(prevState => (
      toggleProperty(prevState, id, 'important')
    ))
  }

  const search = (items, searchValue) => {
    if (searchValue.length === 0) {
      return items
    }

    return items.filter(({ label }) => {
      const labelLowerCase = label.toLowerCase()
      const searchValueLowerCase = searchValue.toLowerCase()
      return labelLowerCase.indexOf(searchValueLowerCase) >= 0
    })
  }

  const onSearch = (value) => {
    setSearchValue(value)
  }

  const filter = (arr) => {
    switch (stateFilter) {
      case 'all':
        return arr

      case 'active':
        return arr.filter(({ done }) => !done)

      case 'done':
        return arr.filter(({ done }) => done)

      default:
        return arr
    }
  }

  const onFilter = (type) => {
    setStateFilter(type)
  }


  const countDone = todoData.filter(item => item.done).length
  const leftToDo = todoData.length - countDone
  const visibleItems = filter(search(todoData, searchValue))

  return (
    <main className={style.wrapper}>
      <Header leftToDo={leftToDo} countDone={countDone} />
      <SearchPanel
        onFilter={onFilter}
        onSearch={onSearch}
        stateFilter={stateFilter}
      />
      <AddPanel onAdd={onAddItem} onClearAll={onClearAll} />
      <TodoList
        todoData={todoData}
        visibleItems={visibleItems}
        onDelete={onDeleteItem}
        onToggleDone={onToggleDone}
        onToggleImportant={onToggleImportant}
        stateFilter={stateFilter}
        searchValue={searchValue}
      />
    </main>
  )
}

export default App