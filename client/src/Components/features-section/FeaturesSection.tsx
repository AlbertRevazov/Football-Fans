import React, { FC } from 'react';
import { Features } from '@/data';
import styles from './feature-section.module.scss';
import FeatureCard from '../ui/FeatureCard';

const FeaturesSection: FC = () => {
  return (
    <section className={styles.features}>
      {Features.map((feat) => (
        <FeatureCard feature={feat} key={feat.id} />
      ))}
    </section>
  );
};

export default FeaturesSection;
