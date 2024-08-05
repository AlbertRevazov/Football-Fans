import { FC, ReactNode } from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};
