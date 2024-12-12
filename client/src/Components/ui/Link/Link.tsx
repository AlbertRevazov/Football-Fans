import React, { FC, ReactNode } from 'react';
import styles from './Link.module.scss';

interface ILinkProps {
  href: string;
  title?: string;
  children?: ReactNode;
}

const Link: FC<ILinkProps> = ({ href, children, title }) => {
  const cn = children ? 'children' : 'link';
  return (
    <a className={styles[cn]} href={href}>
      {children ? children : title}
    </a>
  );
};

export default Link;
