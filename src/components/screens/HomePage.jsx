import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from '../layouts/Header'
import Header2 from '../layouts/Header2'
import Footer from '../layouts/Footer'
import ImageSlider from '../ImageSlider'


const slideImg ="assets/Slider_1.png"


const IMAGES = [slideImg, slideImg, slideImg, slideImg, slideImg]

const HomePage = () => {
  return (
    <>
        {/* <Header />
        <FontAwesomeIcon icon={faCoffee} /> */}
        <Header2 />
        <div style={{ maxWidth: "1200px", width: "100%", aspectRatio: "10 / 2", margin: "0 auto"}}>
          <ImageSlider imageUrls={IMAGES} />
        </div>
        
        <Footer />
    </>
  )
}

export default HomePage