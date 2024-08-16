import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
  return (
    <div className='container mx-auto py-14 relative px-4'>
      <h1 data-aos="fade-up" data-aos-delay="300" className='py-8 tracking-wider text-2xl sm:text-4xl font-semibold text-dark text-center'>
        Taste the Healthy Difference
      </h1>
      <div data-aos="fade-up" data-aos-delay="500" className='space-y-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
          <div>
            <p>
              We know that <span className='text-pink-400'>time</span> is the greatest value in the modern world...
            </p>
          </div>
          <div></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
          <div></div>
          <div>
            <p>
              We know that <span className='text-pink-400'>time</span> is the greatest value in the modern world...
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="300" className='flex justify-center mt-10 md:mt-14'>
        <PrimaryButton />
      </div>
      {/* Background Images */}
      <div className='absolute top-[700px] left-5 sm:top-[700px] sm:left-5 opacity-100'>
        <img data-aos="fade-right" data-aos-delay="300" src="https://clipart-library.com/image_gallery2/Healthy-Food.png" alt="salad" className='max-w-[130px] p-4'/>
      </div>
      <div className='absolute top-[1000px] left-5 sm:top-[1000px] sm:left-5 opacity-100'>
        <img data-aos="fade-right" data-aos-delay="300" src="https://clipart-library.com/image_gallery2/Healthy-Food-PNG.png" alt="salad" className='max-w-[300px] p-4'/>
      </div>
      <div className='absolute top-[800px] right-11 sm:top-[800px] sm:right-11 opacity-100'>
        <img data-aos="fade-left" data-aos-delay="300" src="https://clipart-library.com/image_gallery2/Healthy-Food-PNG-Picture.png" alt="salad" className='max-w-[300px] p-4'/>
      </div>
    </div>
  );
}

export default Banner;
