import emotionReset from "emotion-reset"
import { Global, css, useTheme } from "@emotion/react"

import Header from "components/Header"
import SearchPanel from "components/SearchPanel"
import TodoList from "components/TodoList"
import AddPanel from "components/AddPanel"

const App = () => {
  const { colors } = useTheme()
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          html {
            font-size: 62.5%;
            font-family: "Roboto", sans-serif;
          }

          body {
            background-color: ${colors.secondary.a};
          }
        `}
      />
      <main>
        <Header />
        <SearchPanel />
        <AddPanel />
        <TodoList />
      </main>
    </>
  )
}

export default App
