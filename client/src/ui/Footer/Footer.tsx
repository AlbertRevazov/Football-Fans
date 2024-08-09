import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <p className={styles.title}>
          © 2024 Copyright Football Fans || All Right Reserved || Powered by
          <a className={styles.subTitle} href="http://revaz.vercel.app" target="_blank">
            A.Revazov
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
