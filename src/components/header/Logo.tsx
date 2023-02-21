import { Link } from 'gatsby';
import * as React from 'react';

const Logo = () => {
  return (
    <>
      <h1>
        <Link
          to='/'
          className='uppercase text-amber-400 xl:text-3xl font-black sm:text-lg'
        >
          Steddy Trading
        </Link>
      </h1>
    </>
  );
};

export default Logo;
