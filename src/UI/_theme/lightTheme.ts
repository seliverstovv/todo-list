import { ThemeType } from "."

const lightTheme: ThemeType = {
  colors: {
    primary: {
      main: "#000000",
      deep: "#FF00E4",
      accent: {
        a: "#FBFF00",
        b: "#FF0000",
        c: "#FF9300",
        d: "#49FF00",
      },
    },
    secondary: {
      a: "#E3CAA5",
      b: "#EBD8C3",
      c: "#F7E9D7",
      d: "#FFF6EA",
    },
  },
  radius: {
    button: "0.4rem",
    paper: "0.6rem",
  },
  fontSizes: {
    xs: "0.8rem",
    s: "1rem",
    m: "1.2rem",
    l: "1.4rem",
    xl: "1.6rem",
    xxl: "2rem",
    xxxl: "4rem",
  },
}

export default lightTheme
