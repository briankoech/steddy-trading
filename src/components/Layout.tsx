import * as React from 'react';
import { Header } from './Header';

export const Layout = ({ children }: any) => {
  return (
    <main>
      <Header />
      <div>{children}</div>
    </main>
  );
};
