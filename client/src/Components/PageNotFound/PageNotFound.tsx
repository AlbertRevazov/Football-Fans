import React, { FC } from 'react';
import Link from 'next/link';
import styles from './PageNotFound.module.scss';

const PageNotFound: FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <h1 className={styles.heading}>404</h1>

        <div className={styles.message}>
          <p className={styles.text}>Ой! Страница не найдена</p>
          <p className={styles.subtext}>
            Кажется, вы попытались перейти по ссылке, которая больше не существует или была
            перемещена.
          </p>
        </div>

        <nav className={styles.navigation}>
          <Link href="/" passHref className={styles.link}>
            <button className={styles.button}>Вернуться на главную</button>
          </Link>
        </nav>
      </section>
    </main>
  );
};
export default PageNotFound;
