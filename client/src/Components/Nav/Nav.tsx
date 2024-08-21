import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getMe, logout } from '@/redux/slices/Auth';
import { Links } from '@/data';
import { useRouter } from 'next/router';
import { useIsWideScreen } from '@/utils/useIsWideScreen';
import BurgerSection from './BurgerSection';
import DesktopSection from './DesktopSection';
import Link from 'next/link';
import Button from '../../common/CButton';
import styles from './Nav.module.scss';

const Nav: FC = () => {
  const dispatch = useAppDispatch();
  const [burger, setBurger] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const isWide = useIsWideScreen();

  useEffect(() => {
    if (!user) {
      dispatch(getMe());
    }
  }, [user, dispatch]);

  const getFilteredLinks = () => {
    return user ? Links : Links.filter((item) => item.isGuest);
  };

  const handleLogout = useCallback(() => {
    dispatch(logout());
    router.push('/');
  }, []);

  const filteredLinks = useMemo(() => getFilteredLinks(), [user]);

  return (
    <section>
      <nav className={styles.nav_root}>
        <Link href="/" className={styles.logo}>
          <img className={styles.logo_img} src="/svg/logo.svg" width={80} loading="lazy" />
          <p className={styles.logoTitle}>Football Fans</p>
        </Link>

        {burger && <BurgerSection handleLogout={handleLogout} links={filteredLinks} user={user} />}

        {!isWide ? (
          <Button onClick={() => setBurger(!burger)}>
            <img className={styles.menu} src="/svg/menu.svg" alt="menu" loading="lazy" />
          </Button>
        ) : (
          <DesktopSection handleLogout={handleLogout} user={user} links={filteredLinks} />
        )}
      </nav>
    </section>
  );
};

export default Nav;
