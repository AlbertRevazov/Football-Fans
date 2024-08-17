import React, { FC } from 'react';
import { User } from '@/types/Auth';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './DesktopSection.module.scss';

interface DesktopSectionProps {
  links: {
    id: number;
    url: string;
    title: string;
    isGuest: boolean;
  }[];
  handleLogout: () => void;
  user: User | null;
}

const DesktopSection: FC<DesktopSectionProps> = ({ handleLogout, links, user }) => {
  const router = useRouter();
  return (
    <ul className={styles.ul}>
      {links.map((link) => {
        const isActiveUrl = link.url === router.pathname;
        return (
          <Link key={link.id} href={link.url}>
            <li className={styles[isActiveUrl ? 'li_active' : 'li']}>{link.title}</li>
          </Link>
        );
      })}

      {user ? (
        <button type="button" className={styles.btn} onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link href="/auth" className={styles.link}>
          Sign Up
        </Link>
      )}
    </ul>
  );
};

export default DesktopSection;
