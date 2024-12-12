import React, { FC, ReactNode } from 'react';
import styles from './link.module.scss';

interface ILinkProps {
  href: string;
  title?: string;
  children?: ReactNode;
  className?: string;
}

const Link: FC<ILinkProps> = ({ href, children, title, className }) => {
  const cn = children ? 'children' : 'link';
  return (
    <a className={`${className} ${styles[cn]}`} href={href}>
      {children ? children : title}
    </a>
  );
};

export default Link;
