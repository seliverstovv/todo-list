const theme = {
  colors: {
    primary: {
      main: "#FFFFFF",
      deep: "#8687E7",
      accent: {
        a: "#FFCC80",
        b: "#FF8080",
        c: "#809CFF",
        d: "#CCFF80",
      },
    },
    secondary: {
      a: "#121212",
      b: "#1D1D1D",
      c: "#272727",
      d: "#363636",
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

export type ThemeType = typeof theme

export interface ThemeProps {
  theme: ThemeType
}

export default theme
