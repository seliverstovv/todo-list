import { ChangeEvent } from "react"
import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import { todoItemsCountsSelector } from "features/todo/selectors"
import { themeSelector } from "features/UI/selectors"
import { setTheme } from "features/UI/UISlice"
import Typography from "UI/Typography"
import ToggleSwitch from "UI/ToggleSwitch"
import styles from "./styles"

const Header = ({ className }: { className?: string }) => {
  const dispatch = useAppDispath()
  const { doneCount, progressCount } = useAppSelector(todoItemsCountsSelector)
  const theme = useAppSelector(themeSelector)

  const themeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(setTheme("dark"))
    } else {
      dispatch(setTheme("light"))
    }
  }

  return (
    <header className={className}>
      <div className="mode">
        <ToggleSwitch checked={theme === "dark"} onChange={themeChangeHandler} />
        <Typography className="mode-text" size="m">
          {theme}
        </Typography>
      </div>
      <Typography className="title" tag="h2" size="xxl">
        My Todo List
      </Typography>
      <Typography tag="h3" size="xl">
        {progressCount} more to do, {doneCount} done
      </Typography>
    </header>
  )
}

export default styled(Header)`
  ${styles}
`
