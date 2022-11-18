/** @jsxImportSource @emotion/react */
import FocusLock from "react-focus-lock"
import { useRef } from "react"
import { Transition } from "react-transition-group"
import Portal from "UI/Portal"
import useLockedBody from "UI/_hooks/useLockedBody"
import { Animation, Overlay, Content, focusLock } from "./styles"
import { ModalProps } from "./types"

const AnimateItem = ({ isOpened, onClose, children, className }: ModalProps) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  useLockedBody(isOpened, "root")

  return (
    <Transition
      in={isOpened}
      timeout={{
        enter: 0,
        exit: 300,
      }}
      unmountOnExit
      nodeRef={nodeRef}
    >
      {(state) => (
        <Portal>
          <Animation ref={nodeRef} state={state}>
            <FocusLock css={focusLock}>
              <Overlay onClick={onClose} />
              <Content className={className}>{children}</Content>
            </FocusLock>
          </Animation>
        </Portal>
      )}
    </Transition>
  )
}

export default AnimateItem
