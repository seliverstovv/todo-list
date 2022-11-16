/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { todoItemsCountsSelector } from "features/selectors"
import { useAppSelector } from "store/hooks"
import Typography from "UI/Typography"

const Header = () => {
  const { doneCount, progressCount } = useAppSelector(todoItemsCountsSelector)

  const styles = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 2rem 0;
  `

  return (
    <header css={styles}>
      <Typography tag="h1" size="xxl">
        My Todo List
      </Typography>
      <Typography tag="h3" size="xl">
        {progressCount} more to do, {doneCount} done
      </Typography>
    </header>
  )
}

export default Header
