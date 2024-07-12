import React from 'react'
import Header2 from '../../layouts/Header2'
import Footer from '../../layouts/Footer'
import { flash_sales } from '../../../data'
import ProductCardii from '../../ProductCardii'

const CartPage = () => {
  return (
    <>
        <Header2 />

        <div className="div">

            <div className="">
                <h4></h4>
            </div>

            <div className="similar_items_section lg:px-28 px-[5%] mt-20">
                <div className='flex gap-3 items-center '>
                <img className='w-14px h-27px lg:w-[20px] lg:h-[40px]' src="/assets/Rectangle.png" alt="" />
                <span className="text-[#FDAF3E] text-[12px] lg:text-[24px]  font-bold">Picks for you</span>
                </div>
                <div><h3 className='text-[#000000] text-[18px] lg:text-[36px] font-semibold mt-6 lg:mt-8 '>Similar Items you might like</h3></div>

                <div className="product_card_wrapper mt-6 lg:mt-8 pb-3 flex flex-row flex-nowrap gap-6 overflow-x-scroll scrolling-auto">
                
                {flash_sales.map(data => (
                    <ProductCardii key={data.id} data={data} />
                ))}
                </div>
        </div>
        </div>

        <Footer />
    </>
  )
}

export default CartPage