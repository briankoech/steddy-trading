import * as React from 'react';
import Logo from './Logo';
import Nav from './Nav';

export const Header = () => {
  return (
    <header className='container mx-auto flex p-7 sm:px-0'>
      <div className='flex flex-grow items-center'>
        <Logo />
      </div>
      <div className='flex flex-row p-1'>
        <Nav />
      </div>
    </header>
  );
};
