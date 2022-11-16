/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from "@emotion/react"

import Header from "components/Header"

import TodoList from "components/TodoList"
import Controls from "components/Controls"
import resetStyles from "UI/resetStyles"

const App = () => {
  const { colors } = useTheme()
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
        <TodoList />
      </main>
    </>
  )
}

export default App
