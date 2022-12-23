import * as React from 'react';
import Logo from './Logo';
import Nav from './Nav';

export const Header = () => {
  return (
    <header className='container mx-auto flex p-3'>
      <div className='flex-grow'>
        <Logo />
      </div>
      <div className='flex flex-row p-1'>
        <Nav />
      </div>
    </header>
  );
};
