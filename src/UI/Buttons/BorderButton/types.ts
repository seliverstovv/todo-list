import { BaseButtonProps } from "UI/Buttons/baseButtonTypes"

export interface BorderButtonProps extends BaseButtonProps {
  kind?: "warn" | "success" | "default"
  isActive?: boolean
  isToggle?: boolean
}
