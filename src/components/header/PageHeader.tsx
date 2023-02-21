import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';

export const PageHeader = ({ title = '' }) => {
  return (
    <div className='bg-gray-100 py-9 px-7 sm:px-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
          <h1 className='uppercase font-semibold text-xl'>{title}</h1>
          <div className='text-xs py-3 sm:py-0'>
            <span className='capitalize text-gray-400'>
              You are here:&nbsp;
            </span>
            <Link to='/' className='uppercase text-black hover:underline'>
              Home
            </Link>
            <span className='uppercase text-gray-400'> / {title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
