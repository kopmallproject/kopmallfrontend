import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Apple, BookUser, Gift, Heart, LogOut, Pencil, UserRound, Wallet } from 'lucide-react'
import Header2 from '../../layouts/Header2'

const UserAddressBook = () => {
  return (
    <>
        <Header2 />

        <div className="py-20 lg:px-28 px-[5%]  bg-[#f9f9f9] flex flex-col lg:flex-row lg:justify-between">
            <div className="category_div rounded-lg drop-shadow-md    lg:flex flex-col gap-2 w-100% lg:w-[20%] lg:h-fit bg-[#fff]  text-[#000000]">
                <div className="category_div_card rounded-t-lg bg-[#D7D7D7] px-5 py-3">
                    <UserRound />
                    <span>My Account</span>
                </div>
                <div className="category_div_card px-5 py-2">
                    <i className="w-[24px] h-[24px]"><Gift /></i>
                    <span>Orders</span>
                </div>
                <div className="category_div_card px-5 py-2">
                    <Heart />
                    <span>Saved items</span>
                </div>
                <div className="category_div_card px-5 py-2">
                    <BookUser />
                    <span>Address book</span>
                </div>
                <div className="category_div_card px-5 py-2">
                    <Apple />
                    <span>Supermarket</span>
                </div>
                <div className="category_div_card px-5 py-2">
                    <Wallet />
                    <span>Wallet</span>
                </div>
                <div className="div border-t-[1px] border-[#0000001A] py-3 flex flex-col justify-center items-center">
                    <a className='text-[#FCB349] flex flex-row items-center gap-2' href=""><LogOut />Logout</a>
                </div>
            </div>


            <div className="lg:drop-shadow-md rounded-lg bg-[#fff] w-[100%] lg:w-[880px]  mt-10 lg:mt-0 pb-10">
                <div className="px-5 py-5 border-b-[1px] border-[#0000001A] ">
                    <h3 className="text-[20px] lg:text-[24px] font-bold ">Saved Items</h3>
                </div>

                <div className="py-11 px-2 lg:px-5">
                    {/* <label htmlFor="" className="relative">
                        <input type="text" className="px-4 py-2 text-lg outline-none
                        border-2 border-gray-400 rounded hover:border-gray-600
                        duration-200 peer focus:border-indigo-600 bg-inherit" />
                        <span className="absolute left-0 top-2 px-2 text-lg uppercase
                        tracking-wide peer-focus:text-indigo-600 pointer-events-none
                        duration-200 peer-focus:text-sm peer-focus:-translate-y-8
                        bg-gray-200 ml-2 ">usernames</span> */}
                        {/* peer-valid:text-sm
                        peer-valid:-translate-y-5 */}
                    {/* </label> */}

                    <label htmlFor="" className="relative ">
                        <input type="text" className="w-[100%] px-4 py-2 text-lg outline-none
                        border-2 border-gray-400 rounded hover:border-gray-600
                        duration-200 peer focus:border-indigo-600 bg-inherit" />
                        <span className="absolute left-0 -top-6 px-2  uppercase
                        tracking-wide peer-focus:text-indigo-600 pointer-events-none
                        duration-200 text-sm 
                        bg-gray-200 ml-2 ">usernames</span>

                    </label>
                </div>

            </div>
        
        </div>

        <Footer />
    </>
  )
}

export default UserAddressBook