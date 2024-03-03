import { FC, ReactNode } from "react";
import { Footer } from "../../Common/Footer";
import { Nav } from "../../Common/Nav";

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
