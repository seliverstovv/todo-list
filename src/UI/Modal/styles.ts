import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { TransitionStatus } from "react-transition-group"

export const Animation = styled.div`
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

export const Overlay = styled.div`
    position: fixed;
    background-color: black;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    cursor: pointer;
`

export const Content = styled.div`
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
`

export const focusLock = css`
    width: 100%;
    height: 100%;
`
