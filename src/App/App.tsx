import { useEffect } from "react"
import { Global, useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import getTodosThunk from "features/todo/asyncThunk"
import { loadingSateSelector, todoItemsSelector } from "features/todo/selectors"

import Loader from "UI/Loader"
import Header from "components/Header"
import TodoList from "components/TodoList"
import Controls from "components/Controls"
import ErrorPopup from "components/ErrorPopup"

import styles, { getGlobalStyles } from "./styles"

const App = ({ className }: { className?: string }) => {
  const dispatch = useAppDispath()
  const { isLoading, error } = useAppSelector(loadingSateSelector)
  const todoItems = useAppSelector(todoItemsSelector)
  const theme = useTheme()

  useEffect(() => {
    // If the sheet is empty -> download test data from the server
    if (todoItems.length === 0) {
      dispatch(getTodosThunk())
    }
    // the effect only needs to be performed once on first load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Global styles={getGlobalStyles(theme)} />

      <main className={className}>
        <Header />
        <Controls />
        {(isLoading && (
          <div className="loading">
            <Loader />
          </div>
        )) || <TodoList />}
        {error && <ErrorPopup error={error} />}
      </main>
    </>
  )
}

export default styled(App)`
  ${styles}
`
