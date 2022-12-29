import * as React from 'react';
import { ContactInfo } from './ContactInfo';

export const Footer = () => {
  return (
    <footer>
      <ContactInfo />
      <div className='bg-gray-200 block'>
        <div className='container mx-auto grid grid-cols-4 py-10'>
          <div>
            <h4 className='py-1 font-semibold border-b border-gray-400 after:block after:content after:bg-amber-400 after:w-16 after:h-0.5 after:-mb-1'>
              About Us
            </h4>
            <p>
              Steddy Trading Company is a Kenyan real estate company duly
              incorporated under the companies Act Cap 486 and started its
              operation in 1999. Since its inception, we have made our presence
              felt in the Kenyan property and real estate industry and can with
              certainty declare ourselves a market leader, linking sellers of
              real estate with potential buyers among other consultancy services
            </p>
          </div>

          <div>
            <h4>Our services</h4>
            <ul>
              <li>Land survey</li>
              <li>Property brokerage</li>
              <li>Land sale</li>
              <li>Estate Agency</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
