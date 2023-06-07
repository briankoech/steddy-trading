import React from 'react';
import { HeadFC } from 'gatsby';
import { Layout } from '../components/Layout';

const ContactPage = ({ location }: any) => {
  return (
    <Layout
      title='Contact Us'
      description='Contact us at Kangundo road'
      location={location.pathname}
    >
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d249.30383146263156!2d36.9665974251135!3d-1.254959077723458!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1685904111471!5m2!1sen!2ske"
          className='w-full'
          height="350"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        <div className='container mx-auto'>
          <form className='my-16'>
            <div className='grid grid-cols-1 p-7 sm:grid-cols-2 sm:p-0'>
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

              <div className='mt-5 sm:mt-0 sm:px-5'>
                <textarea
                  placeholder='Message'
                  className='border border-gray-300 w-full h-full px-5 py-4 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500'
                ></textarea>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center  justify-between px-7 sm:px-0 sm:mt-5 sm:py-5'>
              <span className='text-black text-sm'>
                We will contact you within one business day
              </span>

              <button
                type='submit'
                className='uppercase text-white rounded-3xl text-sm font-bold px-5 py-3 bg-yellow-500 border border-yellow-500 focus:bg-white focus:text-black focus:border-yellow-500 hover:text-black hover:bg-white hover:border-yellow-500 self-end sm:self-start'
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
