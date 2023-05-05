import Image from 'next/image'
import React from 'react'
import { logo } from "../../../../public"

type Props = {}

const Logo = (props: Props) => {
    return (
        <span>
            <a href='/' className='flex h-full items-center text-white gap-5 text-2xl font-bold '>
                <Image src={logo} alt="logo" width={100} height={100} />
                <span className='sm:block hidden' >CodeCast</span>
            </a>
        </span>
    )
}

export default Logo