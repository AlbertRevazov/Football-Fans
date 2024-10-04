import React, { FC } from 'react';
import { User } from '@/types/Auth';
import { useRouter } from 'next/router';
import CLink from '../../../Common/Link';
import Button from '@/Common/Button';
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
          <CLink key={link.id} link={link.url}>
            <li className={styles[isActiveUrl ? 'li_active' : 'li']}>{link.title}</li>
          </CLink>
        );
      })}

      {user ? (
        <Button title="Logout" onClick={handleLogout} />
      ) : (
        <CLink link="/auth" title="Sign Up" />
      )}
    </ul>
  );
};

export default DesktopSection;
