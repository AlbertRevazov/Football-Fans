import { FC, ReactNode } from 'react';
import Footer from '../../components/footer';
import Nav from '../../components/nav';

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
