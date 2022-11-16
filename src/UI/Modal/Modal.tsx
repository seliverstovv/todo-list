/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import FocusLock from "react-focus-lock"
import styled from "@emotion/styled"
import { ReactNode, useRef } from "react"
import { Transition, TransitionStatus } from "react-transition-group"
import Portal from "UI/Portal"
import useLockedBody from "UI/_hooks/useLockedBody"

const Animation = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.3s;
  width: 100%;
  height: 100%;
  ${({ state }: { state: TransitionStatus }) => {
    switch (state) {
      case "entering":
        return css`
          opacity: 0;
        `
      case "exiting":
        return css`
          opacity: 0;
        `
      default:
        return ""
    }
  }};
`

const AnimateItem = ({
  isOpened,
  onClose,
  children,
  className,
}: {
  isOpened: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}) => {
  const nodeRef = useRef<HTMLDivElement>(null)
  useLockedBody(isOpened, "root")

  const overlay = css`
    background-color: black;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    cursor: pointer;
  `

  const content = css`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  `
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
            <FocusLock
              css={css`
                width: 100%;
                height: 100%;
              `}
            >
              <div onClick={onClose} css={overlay} />
              <div className={className} css={content}>
                {children}
              </div>
            </FocusLock>
          </Animation>
        </Portal>
      )}
    </Transition>
  )
}

export default AnimateItem
