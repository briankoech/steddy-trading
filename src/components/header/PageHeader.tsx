import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';

export const PageHeader = ({ title = '' }) => {
  return (
    <div className='bg-gray-100 py-9'>
      <div className='container mx-auto'>
        <div className='flex flex-row items-center justify-between'>
          <h1 className='uppercase font-semibold text-xl'>{title}</h1>
          <div className='text-xs'>
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
