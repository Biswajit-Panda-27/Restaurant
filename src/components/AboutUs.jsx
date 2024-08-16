import React from 'react';

const AboutUs = () => {
  return (
    <div className='my-12 py-4 bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-300'>
      <div className="container mx-auto min-h-[500px] relative z-10 px-4">
        <h1 data-aos="fade-up" data-aos-delay="300" className='pt-10 text-neutral-700 tracking-wider text-4xl font-semibold text-center'>
          About Us
        </h1>
        <div data-aos="fade-up" data-aos-delay="300" className='bg-white/80 p-10 my-10 drop-shadow-2xl font-medium tracking-wider rounded-3xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
