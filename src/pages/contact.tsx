import React from 'react';
import { HeadFC } from 'gatsby';
import { Layout } from '../components/Layout';

const ContactPage = () => {
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
  return (
    <Layout>
      <div>
        <iframe
          className='w-full bg-gray-100 h-96'
          loading='lazy'
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'
          src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}}&q=Space+Needle,Seattle+WA`}
        >
          <div>Could not load the maps</div>
        </iframe>

        <div className='container mx-auto'>
          <form className='my-16'>
            <div className='grid grid-cols-2'>
              <div className='grid grid-cols-1'>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='border border-gray-300 w-full px-5 py-4 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500'
                />
                <input
                  type='email'
                  placeholder='Your Email'
                  className='mt-5 border border-gray-300 w-full px-5 py-4 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500'
                />
                <input
                  type='tel'
                  placeholder='Your Phone'
                  className='mt-5 border border-gray-300 w-full px-5 py-4 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500'
                />
              </div>

              <div className='px-5'>
                <textarea
                  placeholder='Message'
                  className='border border-gray-300 w-full h-full px-5 py-4 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500'
                ></textarea>
              </div>
            </div>

            <div className='flex flex-row items-center justify-between mt-5 py-5'>
              <span className='text-black text-sm'>
                We will contact you within one business day
              </span>

              <button
                type='submit'
                className='uppercase text-white rounded-3xl text-sm font-bold px-5 py-3 bg-yellow-500 border border-yellow-500 focus:bg-white focus:text-black focus:border-yellow-500 hover:text-black hover:bg-white hover:border-yellow-500'
              >
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact-Us</title>;
