import "@emotion/react"
import { ThemeType } from "./UI/_theme"

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
