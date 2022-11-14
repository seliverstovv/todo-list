import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "store"

export const todoItemsSelector = ({ todoReducer }: RootState) => todoReducer.todoItems
export const todoTitleSelector = ({ todoReducer }: RootState) => todoReducer.todoTitle
export const searchValueSelector = ({ todoReducer }: RootState) => todoReducer.searchValue
export const filterTypeSelector = ({ todoReducer }: RootState) => todoReducer.filterType

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
