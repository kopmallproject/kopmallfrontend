import React, {useState} from 'react'
import Header2 from '../../layouts/Header2'
import Footer from '../../layouts/Footer'
import { Apple, Camera, Car, Gamepad2, House, Lamp, Laptop, Shell, Smartphone, Watch } from 'lucide-react'
import { products } from '../../../data'
import ProductCardii from '../../ProductCardii'
import ProductCardiii from '../../ProductCardiii'

const ProductPage = () => {

  return (
    <>
       <Header2 />

       <div className="h-[100%] mt-20 lg:px-28 px-[5%] flex  gap-7">
            <div className="category_div hidden max-h-[390px] lg:flex flex-col justify-between w-[20%] bg-[#25133A] p-5 text-[#FFFFFF]">
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

            <div className="card_wrapper w-[100%] lg:w-[80%] flex flex-row flex-wrap gap-3">
                {products.map(product => (
                    <ProductCardiii data={product} />
                ))}
            </div>
       </div>

        <Footer />
    </>
  )
}

export default ProductPage