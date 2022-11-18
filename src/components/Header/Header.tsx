import { ChangeEvent } from "react"
import styled from "@emotion/styled"
import { useAppDispath, useAppSelector } from "store/hooks"
import { todoItemsCountsSelector } from "features/todo/selectors"
import { setTheme } from "features/UI/UISlice"
import Typography from "UI/Typography"
import styles from "./styles"

const Header = ({ className }: { className?: string }) => {
  const dispatch = useAppDispath()
  const { doneCount, progressCount } = useAppSelector(todoItemsCountsSelector)

  const themeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(setTheme("dark"))
    } else {
      dispatch(setTheme("light"))
    }
  }

  return (
    <header className={className}>
      <Typography className="title" tag="h2" size="xxl">
        My Todo List
      </Typography>
      <input type="checkbox" onChange={themeChangeHandler} />
      <Typography tag="h3" size="xl">
        {progressCount} more to do, {doneCount} done
      </Typography>
    </header>
  )
}

export default styled(Header)`
  ${styles}
`
