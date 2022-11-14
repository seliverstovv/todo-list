import Typography from "UI/Typography"

const Header = () => {
  const leftToDo = 4
  const countDone = 6

  return (
    <header>
      <Typography tag="h1" size="xxl">
        My Todo List
      </Typography>
      <Typography tag="h3" size="xl">
        {leftToDo} more to do, {countDone} done
      </Typography>
    </header>
  )
}

export default Header
