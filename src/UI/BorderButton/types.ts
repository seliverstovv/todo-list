import { BaseButtonProps } from "UI/types"

export interface BorderButtonType extends BaseButtonProps {
  kind?: "warn" | "success" | "default"
  isActive?: boolean
}
