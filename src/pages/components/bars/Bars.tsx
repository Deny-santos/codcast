import React, { useState } from 'react'
import { FaBars } from "react-icons/fa"
import Sidbar from '../sidbar/Sidbar'
import Ancor from '../ancor/Ancor'

type Props = {}

const Bars = (props: Props) => {

    const [menuBarsVisible, setMenuBarsVisible] = useState(false)

    return (
        <div>
            <span className='flex gap-5 cursor-pointer'>
                {/* <Ancor setModalVisibility={} isButton>sobre</Ancor> */}
                <FaBars onClick={() => setMenuBarsVisible(!menuBarsVisible)} className=' lg:hidden text-white text-[3rem]' />
            </span>
            <Sidbar visibility={menuBarsVisible} />
        </div>
    )
}

export default Bars