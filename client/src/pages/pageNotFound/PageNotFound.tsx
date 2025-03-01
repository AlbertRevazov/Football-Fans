import React, { FC } from 'react';
import Button from '@/shared/ui/button';
import Link from 'next/link';
import styles from './page-not-found.module.scss';

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
          <Link href="/" className={styles.link}>
            <Button title="Вернуться на главную" />
          </Link>
        </nav>
      </section>
    </main>
  );
};
export default PageNotFound;
