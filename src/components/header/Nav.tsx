import { Link } from 'gatsby';
import * as React from 'react';
import { useState } from 'react';

const pages = [
  { title: 'Home', link: '/' },
  { title: 'Services', link: '/services' },
  { title: 'Products', link: '/products' },
  { title: 'Our Team', link: '/team' },
  { title: 'Contact', link: '/contact' },
];

const Links = () => {
  return (
    <>
      {pages.map(({ link, title }, idx) => (
        <Link key={idx} to={link} className='block pr-3 hover:text-amber-400'>
          {title}
        </Link>
      ))}
      <button
        type='button'
        className='inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium  leading-tight rounded uppercase shadow-md hover:bg-yellow-600 focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-yellow-700 active:shadow-lg'
      >
        Get Started
      </button>
    </>
  );
};

const Nav = () => {
  const [showMenu, setshowMenu] = useState<boolean>(false);
  return (
    <nav>
      <div className='hidden sm:flex items-center'>
        <Links />
      </div>
      <div className='sm:hidden relative'>
        <div>
          <button className='btn-icon' onClick={() => setshowMenu(!showMenu)}>
            Menu
          </button>
        </div>
        {showMenu && (
          <div className='absolute top-10 right-0 z-50 shadow-xl rounded p-2'>
            <Links />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
