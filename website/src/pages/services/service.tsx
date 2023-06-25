import React from 'react';
import { Layout } from '../../components/Layout';
import ImageGallery from 'react-image-gallery'
import ReactMarkdown from 'react-markdown'
import * as DOMPurify from 'dompurify';
import { ContactForm } from '../../components/ContactForm';

export default function PropertiesPage({ error, location, pageContext }: any) {

  const { service } = pageContext || {};

  if (error) {
    return <div>Error loading the page</div>;
  }

  if (!service) {
    return <div>No service found</div>
  }

  const { title, price, size, description, pin_location, images = [] } = service;

  const items = images?.map(({ url }: any) => ({ original: url, thumbnail: url, thumbnailLoading: 'lazy', originalHeight: '300px', originalWidth: 'auto', sizes: "(max-width: 710px) 120px, 270px" }));

  return (
    <Layout
      title={title}
      description='Services that we offer at steddytrading.com'
      location={location.pathname}
    >
      <div className='container mx-auto py-2 px-3 sm:px-0'>
        <div>
          {false && images?.length && <ImageGallery items={items} />}
        </div>
        <div className="container pt-2 grid grid-flow-row-dense grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <div className='flex flex-col col-span-2'>
            <span className="font-semibold text-3xl">Ksh {price} - {size}</span>
            <span className="font-normal py-3 text-2xl text-gray-600">{title}</span>
            <ReactMarkdown children={description} />
            {
              pin_location &&
              <div className='mt-3'>
                <h3 className='text-2xl font-semibold'>Map</h3>
                <div className='w-full' dangerouslySetInnerHTML={{ __html: pin_location }}>
                </div>
              </div>
            }
          </div>
          <div>
            <ContactForm />
          </div>
        </div>

      </div>
    </Layout>
  );

}

