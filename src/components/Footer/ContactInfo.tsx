import {
  EnvelopeOpenIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';
import * as React from 'react';

export const ContactInfo = () => {
  return (
    <div className='bg-yellow-500 block w-full'>
      <div className='container mx-auto grid grid-cols-3 py-10'>
        <div className='flex flex-row items-center'>
          <div className='bg-white p-3 h-16 w-16 rounded-full flex items-center justify-center'>
            <PhoneIcon className='h-10 px-2 text-yellow-500' />
          </div>
          <div className='flex flex-col mx-5 text-white'>
            <span>Phone </span>
            <a href='tel:+254702832788' className='hover:underline'>
              +254702832788
            </a>
          </div>
        </div>

        <div className='flex flex-row items-center'>
          <div className='bg-white p-3 h-16 w-16 rounded-full flex items-center justify-center'>
            <MapPinIcon className='h-10 px-2 text-yellow-500' />
          </div>
          <div className='flex flex-col mx-5 text-white'>
            <span>Kobil Service Station </span>
            <span>Kangundo Road, Next to Shujaa stage</span>
          </div>
        </div>

        <div className='flex flex-row items-center'>
          <div className='bg-white p-3 h-16 w-16 rounded-full flex items-center justify-center'>
            <EnvelopeOpenIcon className='h-10 px-2 text-yellow-500' />
          </div>
          <div className='flex flex-col mx-5 text-white'>
            <span>Email</span>
            <a href='mailto:brnkoech@gmail.com' className='hover:underline'>
              brnkoech@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
