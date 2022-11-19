import { BaseButtonProps } from "UI/Buttons/baseButtonTypes"
import { ThemeType } from "UI/_theme"

export interface BorderButtonProps extends BaseButtonProps {
  kind?: keyof ThemeType["colors"]["buttons"]
  isActive?: boolean
  isToggle?: boolean
}
