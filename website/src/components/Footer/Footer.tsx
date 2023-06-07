import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { ContactInfo } from './ContactInfo';

export const Footer = () => {
  const { strapiAbout, allStrapiService } = useStaticQuery(graphql`
    query {
      strapiAbout {
        title
      }
      allStrapiService {
        nodes {
          slug
          title
        }
      }
    }
  `);

  const { title } = strapiAbout;
  const services = allStrapiService?.nodes || [];

  return (
    <footer>
      <ContactInfo />
      <section className='bg-gray-200 block'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 py-10'>
          <div className='p-3'>
            <h6 className='py-1 mb-4 font-semibold border-b border-gray-300 after:block after:content after:bg-amber-400 after:w-16 after:h-0.5 after:-mb-1 after:mt-3'>
              About Us
            </h6>
            <p>
              {title}
            </p>
          </div>

          <div className='p-3'>
            <h6 className='py-1 mb-4 font-semibold border-b border-gray-300 after:block after:content after:bg-amber-400 after:w-16 after:h-0.5 after:-mb-1 after:mt-3'>
              Our services
            </h6>
            <ul>
              {
                services.map(({ title, slug }: any) =>
                  <li key={slug} className='flex flex-row items-center py-2'>
                    <CheckBadgeIcon className='h-5 w-10 text-yellow-500' />
                    {title}
                  </li>
                )
              }
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
