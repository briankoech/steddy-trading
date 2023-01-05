import { ClockIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import * as React from 'react';

export const ContactHeader = () => {
  return (
    <div className='bg-gray-200'>
      <div className='container mx-auto p-3 flex flex-row text-gray-500'>
        <div className='grid grid-cols-3 divide-x-3'>
          <div className='flex flex-row p-2 items-center'>
            <PhoneIcon className='h-4 px-2 ' />
            <small>
              <a href='tel:+254702832788' className='hover:underline'>
                +254702832788
              </a>
            </small>
          </div>

          <div className='flex flex-row p-2 items-center'>
            <EnvelopeIcon className='h-4 px-2 ' />
            <small>
              <a
                href='mailto:brnkoech@gmail.com?subject = FromWebsite&body = Message'
                className='hover:underline'
              >
                brnkoech@gmail.com
              </a>
            </small>
          </div>

          <div className='flex flex-row p-2 items-center'>
            <ClockIcon className='h-4 px-2 ' />
            <small>Mon - Fri 08:00-17:00</small>
          </div>
        </div>
      </div>
    </div>
  );
};
