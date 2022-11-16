import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "store"

export const todoItemsSelector = ({ todoReducer }: RootState) => todoReducer.todoItems
export const todoTitleSelector = ({ todoReducer }: RootState) => todoReducer.todoTitle
export const todoDescriptionSelector = ({ todoReducer }: RootState) => todoReducer.todoDescription
export const searchValueSelector = ({ todoReducer }: RootState) => todoReducer.searchValue
export const filterTypeSelector = ({ todoReducer }: RootState) => todoReducer.filterType

export const isVisibleAddTaskSelector = ({ todoReducer }: RootState) => todoReducer.isVisibleAddTask
export const isVisibleRemoveAllSelector = ({ todoReducer }: RootState) => todoReducer.isVisibleRemoveAll

export const todoItemsCountsSelector = createSelector([todoItemsSelector], (items) => {
  const length = items.length
  const doneCount = items.filter((item) => item.done).length
  const progressCount = length - doneCount

  return { doneCount, progressCount, totalCount: length }
})

export const todoItemsFilteredSelector = createSelector(
  [todoItemsSelector, searchValueSelector, filterTypeSelector],
  (items, search, filter) => {
    const filteredItems = items.filter((item) => {
      if (filter !== "all" && !item[filter]) {
        return false
      }

      if (search.length !== 0) {
        const titleLowerCase = item.title.toLowerCase()
        const searchValueLowerCase = search.toLowerCase()
        return titleLowerCase.indexOf(searchValueLowerCase) >= 0
      }

      return true
    })
    return { filteredItems, count: items.length }
  }
)
