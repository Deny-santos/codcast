import React, { useState } from 'react'
import Ancor from '../ancor/Ancor'
import Logo from '../logo/Logo'
import Modal from '../modal/Modal'
import Sidbar from '../sidbar/Sidbar'
import Bars from '../bars/Bars'

type Props = {}

const Header = (props: Props) => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <header className={`h-[13vh] flex items-center lg:px-20 px-5 shadow-md shadow-neutral-600 backdrop-blur-sm fixed w-full
            bg-purple-600 bg-opacity-20 gap-5 `
        }>
            <div className={`flex-[1]`}>
                <Logo />
            </div>
            <div className={` lg:flex lg:flex-[5] justify-evenly 1 gap-3 lg:pl-80 hidden`} >
                <Ancor href='#main' >home</Ancor>
                <Ancor href='#explore' >explore</Ancor>
                <Ancor href='#main' >footer</Ancor>
            </div>
            <Ancor href='#main' isButton setModalVisibility={() => setModalVisible(!modalVisible)} >sobre</Ancor>
            <Bars></Bars>
            <Modal visible={modalVisible} setModalVisibility={() => setModalVisible(!modalVisible)} />
        </header>
    )
}

export default Header