import React, { FC } from 'react';
import { Features } from '@/data';
import styles from './FeaturesSection.module.scss';

const FeaturesSection: FC = () => {
  return (
    <section className={styles.features}>
      {Features.map((feat) => (
        <article key={feat.id} className={styles.feature}>
          <img className={styles.icon} src={feat.icon} alt={feat.title} loading="lazy" width={50} />
          <h3 className={styles.title}>{feat.title}</h3>
          <p className={styles.description}>{feat.description}</p>
        </article>
      ))}
    </section>
  );
};

export default FeaturesSection;
