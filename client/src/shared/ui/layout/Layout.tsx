import { FC, ReactNode } from 'react';
import Footer from '@/shared/components/footer';
import Nav from '../nav';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
