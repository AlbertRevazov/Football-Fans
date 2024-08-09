import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getMe, logout } from '@/redux/slices/Auth';
import { Links } from '@/data';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      dispatch(getMe());
    }
  }, [user, dispatch]);

  const getFilteredLinks = () => {
    return user ? Links : Links.filter((item) => item.isGuest);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  const filteredLinks = getFilteredLinks();

  return (
    <section className={styles.nav_section}>
      <nav className={styles.nav_root}>
        <Link href="/" className={styles.logo}>
          <img src="/svg/logo.svg" width={80} className={styles.logo_img} loading="lazy" />
          <p className={styles.logoTitle}>Football Fans</p>
        </Link>
        <ul className={styles.ul}>
          {filteredLinks.map((link) => {
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
      </nav>
    </section>
  );
};
export default Nav;
