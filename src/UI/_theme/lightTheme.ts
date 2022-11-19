import { ThemeType } from "."

const lightTheme: ThemeType = {
  colors: {
    elements: {
      a: "#FFCC80",
      b: "#FF8080",
      c: "#809CFF",
      d: "#CCFF80",
      e: "#F2F2F2",
    },
    backgrounds: {
      a: "#121212",
      b: "#1D1D1D",
      c: "#272727",
      d: "#363636",
      e: "#FF8080",
    },
    buttons: {
      default: {
        base: {
          color: "#FFFFFF",
          border: "#809CFF",
          background: "transparent",
        },
        hover: {
          color: "#FFFFFF",
          border: "#809CFF",
          background: "#809CFF",
        },
      },
      warn: {
        base: {
          color: "#FFFFFF",
          border: "#FF8080",
          background: "transparent",
        },
        hover: {
          color: "#FFFFFF",
          border: "#FF8080",
          background: "#FF8080",
        },
      },
      success: {
        base: {
          color: "#FFFFFF",
          border: "#CCFF80",
          background: "transparent",
        },
        hover: {
          color: "#000000",
          border: "#CCFF80",
          background: "#CCFF80",
        },
      },
      fill: {
        base: {
          color: "#FFFFFF",
          border: "#CCFF80",
          background: "transparent",
        },
        hover: {
          color: "#000000",
          border: "#CCFF80",
          background: "#CCFF80",
        },
      },
    },
  },
  fonts: {
    sizes: {
      xs: "0.8rem",
      s: "1rem",
      m: "1.2rem",
      l: "1.4rem",
      xl: "1.6rem",
      xxl: "2rem",
      xxxl: "4rem",
    },
    colors: {
      primary: "#FFFFFF",
      secondary: "#F2F2F2",
      hint: "#D5D5D5",
      error: "#FF8080",
    },
  },
  radius: {
    button: "0.4rem",
    paper: "0.6rem",
  },
}

export default lightTheme
