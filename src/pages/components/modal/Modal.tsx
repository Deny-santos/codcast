import Image from 'next/image'
import React from 'react'
import { profile, svgModal } from "../../../../public/"
import { CgProfile } from "react-icons/cg"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"


type Props = {
    visible: boolean,
    setModalVisibility: () => void
}

const Modal = (props: Props) => {
    const { visible, setModalVisibility } = props
    return (
        <div className={`${visible ? "" : "hidden"} fixed`}  >
            <div onClick={setModalVisibility} className='z-10 left-0 fixed top-0 flex h-[100vh] w-[100vw] opacity-60 bg-black transition-bg-500 ease-in-out'>

            </div>
            <div className={`max-w-[90vw] flex flex-col p-10 z-20 lg:h-[70vh] h-[80vh] lg:w-[60vw] xs:w-[90vw]  bg-white absolute lg:top-[15vh] top-[10vh] sm:left-[18vw] rounded-md 
            `}>
                <div className='flex items-center justify-between  border-b-2 border-black pb-5 mb-5'>
                    <h2 className='text-4xl font-semibold'>Criador</h2>
                    <button onClick={setModalVisibility} className={`capitalize bg-red-600 py-2 px-5 text-white rounded-md
                    `}>
                        fechar
                    </button>
                </div>
                <div className='flex'>
                    <div className='flex xl:flex-row flex-1 gap-10 mt-10 h-full flex-col'>
                        <div className='w-24 h-24'>
                            <Image className=' rounded-full border-2 overflow-hidden border-blue-600 w-24 h-24' src={profile} alt='profile' />
                            <div></div>
                        </div>
                        <div className='flex flex-col gap-5 mt-10 xl:mt-0'>
                            <span className={`flex gap-2 text-xl flex items-center`}>
                                <CgProfile className='text-blue-600' />
                                <h3 className='font-semibold'>Nome: </h3>
                                <p>Denisson</p>
                            </span>
                            <span className={`flex gap-2 text-xl flex items-center`}>
                                <HiOutlineMail className='text-blue-600' />
                                <h3 className='font-semibold'>Email: </h3>
                                <p>denisson@gmail.com</p>
                            </span>
                            <span className={`flex gap-2 text-xl flex items-center`}>
                                <HiOutlinePhone className='text-blue-600' />
                                <h3 className='font-semibold'>Telefone: </h3>
                                <p>(79) 99845-9078</p>
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center justify-end flex-1 h-full'>
                        <Image src={svgModal} alt='svg do modal' className='w-96 h-96 md:block hidden'  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal