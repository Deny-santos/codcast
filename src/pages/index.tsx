import React from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Explore from './components/explore/Explore'
import Modal from './components/modal/Modal'

type Props = {}

const index = (props: Props) => {
  return (
    <div className='bg-gradient-to-r from-green-600 to-blue-400'>
      <Header/>
      <Main />
      <Explore/>
    </div>
  )
}

export default index