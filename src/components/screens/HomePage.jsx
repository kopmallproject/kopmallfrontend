import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from '../layouts/Header'
import Header2 from '../layouts/Header2'
import Footer from '../layouts/Footer'
import ImageSlider from '../ImageSlider'
import { Apple, Camera, Car, Gamepad2, House, Lamp, Laptop, Shell, Smartphone, Watch } from 'lucide-react'



const slideImg ="assets/Slider_1.png"


const IMAGES = [slideImg, slideImg, slideImg, slideImg, slideImg]

const HomePage = () => {
  return (
    <>
        {/* <Header />
        <FontAwesomeIcon icon={faCoffee} /> */}
        <Header2 />
        <div className='mt-20 lg:px-28 px-[5%] h-[140px] lg:h-[345px] flex space-between'> 
          <div className="category_div hidden lg:flex flex-col justify-between w-[25%] bg-[#25133A] p-5 text-[#FFFFFF]">
            <div className="category_div_card">
              <Smartphone />
              <span>Phones & Tablets</span>
            </div>
            <div className="category_div_card">
              <i className="w-[24px] h-[24px]"><Lamp /></i>
              <span>Appliances</span>
            </div>
            <div className="category_div_card">
              <Laptop />
              <span>Computing</span>
            </div>
            <div className="category_div_card">
              <Watch />
              <span>Wearable Tech</span>
            </div>
            <div className="category_div_card">
              <Apple />
              <span>Supermarket</span>
            </div>
            <div className="category_div_card">
              <Camera />
              <span>Cameras</span>
            </div>
            <div className="category_div_card">
              <Gamepad2 />
              <span>Gaming</span>
            </div>
            <div className="category_div_card">
              <House />
              <span>Land & Properties</span>
            </div>
            <div className="category_div_card">
              <Car />
              <span>Automobiles</span>
            </div>
            <div className="category_div_card">
              <Shell />
              <span>Other Categories</span>
            </div>
          </div>
          <div className='w-[90%] lg:w-[72%]' style={{ height: "100%", margin: "0 auto"}}>
            <ImageSlider imageUrls={IMAGES} />
          </div>
        </div>

        <div className="lg:px-28 px-[0]">
          <div className="mt-20  px-[5%] relative best_selling bg-[#000000] flex items-center justify-between h-[180px] lg:h-[500px] ">
            <div className="">
              <span className='text-[5.75px] lg:text-[16px] text-[#fff] font-semibold mb-5'>Best Selling</span>
              <h1 className='text-[17.28px] lg:text-[48px] text-[#FAFAFA] font-semibold w-[160px] lg:w-[443px] leading-5 lg:leading-10'>Enhance Your Music Experience</h1>
              <div className="time_wrapper flex items-center gap-4 mt-3 lg:mt-6">
                <div className="flex flex-col bg-white w-[27px] h-[27px] lg:w-[64px] lg:h-[64px] justify-center items-center rounded-full">
                  <span className="text-[7.2px] lg:text-[16px] text-[#000000] font-semibold">23</span>
                  <span className="text-[7px] lg:text-[11px] text-[#000000]">Hours</span>
                </div>
                <div className="flex flex-col bg-white w-[27px] h-[27px] lg:w-[64px] lg:h-[64px] justify-center items-center rounded-full">
                  <span className="text-[7.2px] lg:text-[16px] text-[#000000] font-semibold">23</span>
                  <span className="text-[7px] lg:text-[11px] text-[#000000]">Hours</span>
                </div>
                <div className="flex flex-col bg-white w-[27px] h-[27px] lg:w-[64px] lg:h-[64px] justify-center items-center rounded-full">
                  <span className="text-[7.2px] lg:text-[16px] text-[#000000] font-semibold">23</span>
                  <span className="text-[7px] lg:text-[11px] text-[#000000]">Hours</span>
                </div>
                <div className="flex flex-col bg-white w-[27px] h-[27px] lg:w-[64px] lg:h-[64px] justify-center items-center rounded-full">
                  <span className="text-[7.2px] lg:text-[16px] text-[#000000] font-semibold">23</span>
                  <span className="text-[7px] lg:text-[11px] text-[#000000]">Hours</span>
                </div>
              </div>
              <button className='mt-4 lg:mt-8 bg-[#4B3D88] py-1 px-5 lg:py-4 lg:px-12 text-[5.76px] lg:text-[16px] text-[#FAFAFA] font-medium'>Buy Now!</button>
            </div>
            <div className="">
              <img className='absolute top-0 left-[50%] lg:w-[504px] lg:h-[500px] w-[182px] h-[182px] z-10' src="/assets\Ellipse 23.png" alt="" />
              <img className='w-[205px] lg:w-[568px] lg:h-[330px] h-[119px] z-20 relative' src="/assets\JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png" alt="" />
            </div>
          </div>
          </div>
        
        <Footer />
    </>
  )
}

export default HomePage