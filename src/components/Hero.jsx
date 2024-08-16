import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Hero = () => {
  return (
    <div className='relative z-[-1] bg-gradient-to-r from-cyan-100 via-violet-200 to-fuchsia-300'>
      <div className="container mx-auto py-16 sm:py-0 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          <div className='space-y-7 text-dark order-2 sm:order-1'>
            <h1 data-aos="fade-up" className='text-5xl'>
              Fresh & Healthy Plan <span className='text-cyan-400 font-cursive text-7xl'>Delivery</span> in Bhubaneswar
            </h1>
            <p data-aos="fade-up" className='lg:pr-64'>
              Delicious Meals Delivered to Your Door From $132.95 per week
            </p>
            <div data-aos="fade-up" data-aos-delay="500">
              <PrimaryButton />
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="500" className='relative z-30 order-1 sm:order-2'>
            <img src="https://clipart-library.com/images_k/food-transparent-background/food-transparent-background-7.png" alt="food" className='w-full sm:scale-125 sm:translate-y-16'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
