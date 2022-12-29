import * as React from 'react';

export const Hero = () => {
  return (
    <div className='h-128 bg-gray-500 flex relative'>
      <img src='' alt='' className="absolute" />

      <div className='container mx-auto flex items-center'>
        <div className='p-3 flex flex-col divide-y-2 divide-amber-400 max-w-md'>
          <div className='bg-black-600 text-white uppercase border-bottom-1 text-xl bg-gray-800 p-5'>
            <h2>Professional brokerage of land</h2>
          </div>
          <div className='bg-gray-800 p-5 text-white opacity-70'>
            <p className='block mb-4'>
              We have Professional brokers who will get you the client you want.
            </p>
            <button className='border rounded-3xl border-white text-white font-bold px-4 py-2 uppercase border-radius hover:bg-amber-400 hover:border-amber-400'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
