import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import * as React from 'react';
import { ContactInfo } from './ContactInfo';

export const Footer = () => {
  return (
    <footer>
      <ContactInfo />
      <section className='bg-gray-200 block'>
        <div className='container mx-auto grid grid-cols-4 py-10'>
          <div className='p-3'>
            <h6 className='py-1 mb-4 font-semibold border-b border-gray-300 after:block after:content after:bg-amber-400 after:w-16 after:h-0.5 after:-mb-1 after:mt-3'>
              About Us
            </h6>
            <p>
              Steddy Trading Company is a Kenyan real estate company duly
              incorporated under the companies Act Cap 486 and started its
              operation in 1999. Since its inception, we have made our presence
              felt in the Kenyan property and real estate industry and can with
              certainty declare ourselves a market leader, linking sellers of
              real estate with potential buyers among other consultancy services
            </p>
          </div>

          <div className='p-3'>
            <h6 className='py-1 mb-4 font-semibold border-b border-gray-300 after:block after:content after:bg-amber-400 after:w-16 after:h-0.5 after:-mb-1 after:mt-3'>
              Our services
            </h6>
            <ul>
              <li className='flex flex-row items-center py-2'>
                <CheckBadgeIcon className='h-5 w-10 text-yellow-500' />
                Land survey
              </li>
              <li className='flex flex-row items-center py-2'>
                <CheckBadgeIcon className='h-5 w-10 text-yellow-500' />
                Property brokerage
              </li>
              <li className='flex flex-row items-center py-2'>
                <CheckBadgeIcon className='h-5 w-10 text-yellow-500' />
                Land sale
              </li>
              <li className='flex flex-row items-center py-2'>
                <CheckBadgeIcon className='h-5 w-10 text-yellow-500' />
                Estate Agency
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='flex items-center justify-center p-6 text-center'>
        <span className='text-gray-500'>
          This website was created by &nbsp;
          <a href='#' target='_blank' className='text-black hover:underline'>
            Bonafide Devshop
          </a>
        </span>
      </section>
    </footer>
  );
};
