import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from './Link.module.scss';

interface ICLinkProps {
  link: string;
  title?: string;
  children?: ReactNode;
}

const CLink: FC<ICLinkProps> = ({ title, link, children }) => {
  return (
    <Link className={styles[children ? 'children' : 'link']} href={link}>
      {children ? children : title}
    </Link>
  );
};

export default CLink;
