import React, { FC } from 'react';
import Link from 'next/link';
import styles from './welcome-section.module.scss';
import Button from '../ui/Button';

const WelcomeSection: FC = () => {
  return (
    <div className={styles.root}>
      <article className={styles.content}>
        <section className={styles.section}>
          <header className={styles.header}>
            <h2 className={styles.title}>Your Ultimate Football Companion</h2>
            <h4 className={styles.subtitle}>
              From match highlights to player stats, we've got all the action covered.
            </h4>
          </header>
          <Link href="/favorites" className={styles.btn}>
            <Button title="Go To Favorites" />
          </Link>
        </section>
        <figure className={styles.figure}>
          <img
            src="img/main/welcome.webp"
            alt="Newest collection"
            loading="lazy"
            className={styles.img}
          />
        </figure>
      </article>
    </div>
  );
};

export default WelcomeSection;
