/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from "@emotion/react"
import { useEffect } from "react"
import { useAppDispath, useAppSelector } from "store/hooks"
import getTodosThunk from "features/asyncThunk"

import Header from "components/Header"

import TodoList from "components/TodoList"
import Controls from "components/Controls"
import resetStyles from "UI/resetStyles"
import { loadingSateSelector } from "features/selectors"
import ErrorPopup from "components/ErrorPopup"
import Loader from "UI/Loader"

const App = () => {
  const dispatch = useAppDispath()
  const { isLoading, error } = useAppSelector(loadingSateSelector)
  const { colors } = useTheme()

  useEffect(() => {
    dispatch(getTodosThunk())
  }, [dispatch])

  return (
    <>
      <Global
        styles={css`
          ${resetStyles}
          html {
            font-size: 62.5%;
            font-family: "Roboto", sans-serif;
          }

          body {
            background-color: ${colors.secondary.a};
          }
        `}
      />
      <main
        css={css`
          max-width: 85rem;
          padding: 2rem 3rem;
          margin: 0 auto;
        `}
      >
        <Header />
        <Controls />
        {(isLoading && (
          <div
            css={css`
              height: 60vh;
            `}
          >
            <Loader />
          </div>
        )) || <TodoList />}
        {error && <ErrorPopup error={error} />}
      </main>
    </>
  )
}

export default App
