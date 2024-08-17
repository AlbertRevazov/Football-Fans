import React, { FC } from 'react';
import styles from './DreamsSection.module.scss';
import Link from 'next/link';

const DreamsSection: FC = () => {
  return (
    <div className={styles.root}>
      <article className={styles.content}>
        <section className={styles.header}>
          <h2 className={styles.title}>Field of Dreams</h2>
          <p className={styles.subtitle}>
            Step onto the green canvas of the world's most beloved sport and explore the essence of
            football, from the grassroots to the grand stages.
          </p>

          <Link className={styles.link} href={'/matches'}>
            {' '}
            Explore
          </Link>
        </section>
        <img
          className={styles.image}
          src="/img/main/stadion.png"
          alt="dreams block pic"
          loading="lazy"
        />
      </article>
    </div>
  );
};

export default DreamsSection;
