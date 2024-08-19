import React, { FC } from 'react';
import { User } from '@/types/Auth';
import Link from 'next/link';
import Button from '@/common/CButton';
import styles from './BurgerSection.module.scss';

interface BurgerSectionProps {
  links: {
    id: number;
    url: string;
    title: string;
    isGuest: boolean;
  }[];
  handleLogout: () => void;
  user: User | null;
}

const BurgerSection: FC<BurgerSectionProps> = ({ links, handleLogout, user }) => {
  return (
    <ul className={styles.ul}>
      {links.map((link) => (
        <Link key={link.id} href={link.url}>
          <li className={styles.li}>{link.title}</li>
        </Link>
      ))}
      {user ? (
        <Button title={'Logout'} onClick={handleLogout} />
      ) : (
        <Link href="/auth" className={styles.link}>
          Sign Up
        </Link>
      )}
    </ul>
  );
};

export default BurgerSection;
