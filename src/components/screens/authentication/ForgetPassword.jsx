import React from 'react'

const ForgetPassword = () => {
  return (
    <>
        <div className="flex flex-row ">
            <div className="w-[100%] left_wrapper h-[100vh] lg:w-[50%] bg-[#25133A] px-7 lg:px-[7%] lg:py-[50px] pt-[20px] pb-[50px] flex flex-col lg:justify-center ">
                <div className="">
                    <h1 className='text-[20px] font-weight-700 mb-[80px] lg:mb-[30px] text-[#FFFFFF] '>KOP Mall</h1>
                    <div className="mb-[50px] lg:mb-[20px]">
                        <h3 className='text-[20px] font-weight-700 mb-[10px] text-[#FFFFFF]'>Forgot Password</h3>
                        <p className='text-[12px] font-weight-400 text-[#FFFFFF] lg:text-[16px] '>Enter your registered email address</p>
                    </div>
                
                   <form action="" className='flex flex-col gap-3'>
                        <input type="email" placeholder="Email address" className="input input-bordered border-[1px] border-solid border-[#FFFFFF80] bg-transparent text-[#FFFFFF80] text-[16px] font-weight-400 " />
                        
                        <button className="btn btn-block bg-transparent border-[1px] border-[#FCB349] text-[#FCB349] text-[20px] font-weight-700 hover:text-[#FCB349] hover:border-[#25133A] hover:bg-[#ffff]">Reset password</button>
                    </form>
                </div>
            </div>
            <div className="hidden lg:flex right_wrapper h-[100vh] w-[50%] py-[50px] px-[5%]  align-center justify-center">
                <div className=""> 
                    <img src="assets/SigupHeroImg.png" className='w-[450px] h-[400px] mx-auto' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default ForgetPassword