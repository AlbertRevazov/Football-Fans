import React, { FC } from 'react';
import styles from './WelcomeSection.module.scss';

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
          <button className={styles.button}>Go To Favorites</button>
        </section>
        <figure className={styles.figure}>
          <img
            src="/img/main/welcome.webp"
            alt="Newest collection"
            loading="lazy"
            className={styles.firstImage}
          />
        </figure>
      </article>
    </div>
  );
};

export default WelcomeSection;
