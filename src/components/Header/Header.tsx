import styled from "@emotion/styled"
import { useAppSelector } from "store/hooks"
import { todoItemsCountsSelector } from "features/todo/selectors"
import Typography from "UI/Typography"
import styles from "./styles"

const Header = ({ className }: { className?: string }) => {
  const { doneCount, progressCount } = useAppSelector(todoItemsCountsSelector)

  return (
    <header className={className}>
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
