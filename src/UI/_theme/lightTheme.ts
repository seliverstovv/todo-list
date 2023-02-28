import { ThemeType } from "."

const lightTheme: ThemeType = {
    colors: {
        elements: {
            a: "#FFCC80",
            b: "#FF1700",
            c: "#809CFF",
            d: "#CCFF80",
            e: "#316B83",
        },
        backgrounds: {
            a: "#FFF9CA",
            b: "#FDFAF6",
            c: "#FCF8E8",
            d: "#F9F9F9",
            e: "#FFB4B4",
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
            primary: "#000000",
            secondary: "#2C3333",
            hint: "#7F8487",
            error: "#FF1700",
        },
    },

    buttons: {
        default: {
            base: {
                color: "#000000",
                border: "#316B83",
                background: "transparent",
            },
            hover: {
                color: "#FFFFFF",
                border: "#316B83",
                background: "#316B83",
            },
        },

        warn: {
            base: {
                color: "#000000",
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
                color: "#000000",
                border: "#5AA469",
                background: "transparent",
            },
            hover: {
                color: "#FFFFFF",
                border: "#5AA469",
                background: "#5AA469",
            },
        },

        fill: {
            base: {
                color: "#FFFFFF",
                border: "#316B83",
                background: "#316B83",
            },
            hover: {
                color: "#FFFFFF",
                border: "#056676",
                background: "#056676",
            },
        },
    },

    radius: {
        button: "0.4rem",
        paper: "0.6rem",
    },
}

export default lightTheme
