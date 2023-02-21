import { Link } from 'gatsby';
import * as React from 'react';

const Logo = () => {
  return (
    <>
      <Link
        to='/'
    className='uppercase text-amber-400 text-2xl sm:text-sm md:text-xl lg:text-3xl font-black'
      >
        Steddy Trading
      </Link>
    </>
  );
};

export default Logo;
