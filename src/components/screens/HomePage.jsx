import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from '../layouts/Header'
import Header2 from '../layouts/Header2'
import Footer from '../layouts/Footer'

const HomePage = () => {
  return (
    <>
        {/* <Header />
        <FontAwesomeIcon icon={faCoffee} /> */}
        <Header2 />
        <Footer />
    </>
  )
}

export default HomePage