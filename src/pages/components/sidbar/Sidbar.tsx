import React from 'react'
import Ancor from '../ancor/Ancor'

type Props = {
    visibility: boolean,
}

const Sidbar = (props: Props) => {
    const { visibility } = props

    return (
        <div className={`h-[87vh] w-screen bg-black bg-opacity-70 absolute top-[13vh] transition-all
            ${visibility ? "left-0" : "left-[103vw]"} flex flex-col items-center justify-evenly cursor-pointer`
        }>
            <Ancor text='large' href='#main' >home</Ancor>
            <Ancor text='large' href='#explore' >explore</Ancor>
            <Ancor text='large' href='#main' >footer</Ancor>
        </div>
    )
}

export default Sidbar