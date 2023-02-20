import { ClockIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { contactInfo } from '../../data-source';
import * as React from 'react';

export const ContactHeader = () => {
  return (
    <div className='bg-gray-200'>
      <div className='container mx-auto p-3 flex flex-row text-gray-500'>
        <div className='grid grid-cols-3 divide-x-3'>
          <div className='flex flex-row p-2 items-center'>
            <PhoneIcon className='h-4 px-2 ' />
            <small>
              <a href={`tel:${contactInfo.phone}`} className='hover:underline'>
                {contactInfo.phone}
              </a>
            </small>
          </div>

          <div className='flex flex-row p-2 items-center'>
            <EnvelopeIcon className='h-4 px-2 ' />
            <small>
              <a
                href={`mailto:${contactInfo.email}?subject = FromWebsite&body = Message`}
                className='hover:underline'
              >
                {contactInfo?.email}
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
