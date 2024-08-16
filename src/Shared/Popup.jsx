import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ showPopup, setShowPopup }) => {
    return (
        <>
            {showPopup && (
                <div className='fixed inset-0 bg-black/50 z-50 backdrop-blur-sm'>
                    <div className='flex justify-center items-center h-full px-4'>
                        <div className='p-6 shadow-md bg-white rounded-md w-full max-w-xs'>
                            {/* header section */}
                            <div className='flex items-center justify-between'>
                                <h1 className='text-2xl font-bold text-dark'>Login</h1>
                                <IoCloseOutline className='text-2xl cursor-pointer' onClick={() => setShowPopup(false)} />
                            </div>
                            {/* login form section */}
                            <div className='mt-4'>
                                <input type="email"
                                    placeholder='Enter your email ID' className='w-full rounded-md border border-gray-500 px-2 py-1 mb-4' />

                                <input type="password"
                                    placeholder='Enter your password' className='w-full rounded-md border border-gray-500 px-2 py-1 mb-4' />

                                {/* login button section */}
                                <button className='w-full bg-pink-400 text-white py-2 rounded-md mb-4' onClick={() => setShowPopup(false)}>
                                    Login
                                </button>

                                {/* social login */}
                                <div className='text-center'>
                                    <p className='text-gray-500'>or login with</p>
                                    <div className='flex justify-center gap-4 mt-2'>
                                        <FaFacebook className='text-3xl hover:text-blue-500 duration-200' />
                                        <FaGoogle className='text-3xl hover:text-pink-600 duration-200' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
