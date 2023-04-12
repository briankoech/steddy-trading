import {
  EnvelopeOpenIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';
import * as React from 'react';
import { contactInfo } from '../../data-source';

export const ContactInfo = () => {
  return (
    <div className='bg-yellow-500 block w-full'>
      <div className='container mx-auto flex flex-col px-10 py-10 md:grid md:grid-cols-3'>
        <div className='flex flex-row sm:flex-col xl:flex-row items-center'>
          <div className='bg-white p-3 h-16 w-16 rounded-full flex items-center justify-center'>
            <PhoneIcon className='h-10 px-2 text-yellow-500' />
          </div>
          <div className='flex flex-col mx-5 text-white items-start sm:items-center py-4 xl:py-0 xl:items-start'>
            <span>Phone </span>
            <a href={`tel:${contactInfo.phone}`} className='hover:underline'>
              {contactInfo.phone}
            </a>
          </div>
        </div>

        <div className='flex flex-row sm:flex-col xl:flex-row items-center'>
          <div className='bg-white p-3 h-16 w-16 rounded-full flex items-center justify-center'>
            <MapPinIcon className='h-10 px-2 text-yellow-500' />
          </div>
          <div className='flex flex-col mx-5 text-white items-start sm:items-center py-4 xl:py-0 xl:items-start'>
            <span>Kobil Service Station </span>
            <span>Kangundo Road, Next to Shujaa stage</span>
          </div>
        </div>

        <div className='flex flex-row sm:flex-col xl:flex-row items-center'>
          <div className='bg-white p-3 h-16 w-16 rounded-full flex items-center justify-center'>
            <EnvelopeOpenIcon className='h-10 px-2 text-yellow-500' />
          </div>
          <div className='flex flex-col mx-5 text-white items-start sm:items-center py-4 xl:py-0 xl:items-start'>
            <span>Email</span>
            <a href={`mailto:${contactInfo.email}`} className='hover:underline'>
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
