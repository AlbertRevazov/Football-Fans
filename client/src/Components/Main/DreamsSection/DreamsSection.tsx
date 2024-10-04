import React, { FC } from 'react';
import CLink from '@/Common/Link/Link';
import styles from './DreamsSection.module.scss';

const DreamsSection: FC = () => {
  return (
    <section className={styles.root}>
      <article className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>Field of Dreams</h2>
          <p className={styles.subtitle}>
            Step onto the green canvas of the world's most beloved sport and explore the essence of
            football, from the grassroots to the grand stages.
          </p>
          <nav>
            <CLink title="Explore" link="/matches" />
          </nav>
        </header>
        <figure className={styles.imageContainer}>
          <img
            className={styles.image}
            src="/img/main/stadion.png"
            alt="dreams block pic"
            loading="lazy"
          />
        </figure>
      </article>
    </section>
  );
};

export default DreamsSection;
