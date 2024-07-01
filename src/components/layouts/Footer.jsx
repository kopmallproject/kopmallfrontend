import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-[#25133A] text-[#fff] mt-20">
            <div className="flex flex-col gap-6 lg:flex-row px-6 lg:px-16 py-4 lg:py-10">
                <div className="">
                    <h1 className="text-[20x] lg:text-3xl uppercase font-bold">
                        KOP MALL
                    </h1>
                    <div className="mt-5 ">
                        <h2 className='text-[20px] font-weight-500 capitalize mb-4'>subscribe</h2>
                        <span className="text-[16px] text-[#FAFAFA] font-weight-400">Get 10% off your first order</span>
                        <form action="" className="mt-5">
                            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                                
                                {/* ring-2 ring-gray-300 */}
                                <input className='lg:w-[360px] pr-10 pl-2 border-[1px] bg-transparent 
                                border-solid border-[#fff] py-2 font-semibold placeholder-gray-500 text-[12px] text-black rounded lg:rounded-xl  focus:ring-2 ' 
                                    type="text" 
                                    autocomplete="off"
                                    name="email" 
                                    placeholder='Enter your email' />
                                <FontAwesomeIcon icon={faArrowRight} className=' w-5 h-5 absolute ml-56' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="">
                    <h2 className='text-[20px] font-weight-500 capitalize'>Support</h2>
                    <div className="">
                        <span className="">This is a placeholder for the office address</span>
                        <span className="">kopmall@mail.com</span>
                        <span className="">+234 --------------</span>

                    </div>
                </div>
                <div className="">
                    <h2 className='text-[20px] font-weight-500 capitalize'>Account</h2>
                    <div className="">
                        <span className=""><a href="" className="">My Account</a></span>
                        <span className=""><a href="" className="">Login</a> / <a href="" className=''>Register</a></span>
                        <span className=""><a href="" className="">Cart</a></span>
                        <span className=""><a href="" className="">Wishlist</a></span>
                        <span className=""><a href="" className="">Shop</a></span>
                        
                    </div>
                </div>
                <div className="">
                    <h2 className='text-[20px] font-weight-500 capitalize'>Quick Link</h2>
                    <div className="">
                        <span className=""><a href="" className="">Privacy Policy</a></span>
                        <span className=""><a href="" className="">Terms Of Use</a> / <a href="" className=''>Register</a></span>
                        <span className=""><a href="" className="">FAQ</a></span>
                        <span className=""><a href="" className="">Contact</a></span>
                        
                    </div>
                </div>

                <div className="">
                    <h2 className='text-[20px] font-weight-500 capitalize'>Social media</h2>
                    <div className="">
                        <span className="">Connect with us</span>
                        <div className="icons_social">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <FontAwesomeIcon icon={faArrowRight} />
                            <FontAwesomeIcon icon={faArrowRight} />
                            <FontAwesomeIcon icon={faArrowRight} />
                        
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="">
                <span>&copy Copyright KOP Mall 2024. All right reserved</span>
            </div>
        </footer>
    </>
  )
}

export default Footer