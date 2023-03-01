import { ReactNode, useEffect, useState } from "react"
import ReactDOM from "react-dom"

const Portal = ({ children }: { children: ReactNode }) => {
    const [container] = useState(() => document.createElement("div"))

    useEffect(() => {
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ReactDOM.createPortal(children, container)
}

export default Portal
