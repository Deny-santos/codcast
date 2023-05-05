import React, { ReactElement } from 'react'
import Sidbar from '../sidbar/Sidbar'

interface Props {
    href?: string,
    isButton?: boolean,
    children: React.ReactChild,
    setModalVisibility?: () => void,
    text?: "large" | "small"
}

const Ancor = (props: Props) => {
    const { href, children, isButton, setModalVisibility, text } = props
    return (
        <>
            {!isButton ?
                <a href={href} className={`${text == "large" ? "text-5xl": "text-2xl"} text-white`}>
                    {children}
                </a>
            :
                <button onClick={setModalVisibility} className={`bg-white hover:text-white text-blue-600 px-10 py-3 rounded-md capitalize 
                    font-semibold text-xl border  border-black border-white  hover:bg-transparent transition-all 
                `}>
                    {children}
                </button>}

        </>
    )
}

export default Ancor