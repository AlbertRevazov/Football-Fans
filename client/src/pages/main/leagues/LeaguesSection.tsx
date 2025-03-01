import React from 'react';
import { Leagues } from '@/shared/data';
import Link from 'next/link';
import styles from './leagues-section.module.scss';

const LeaguesSection = () => {
  return (
    <div className={styles.popularCategories}>
      <div>
        <h2 className={styles.title}>popular league categories</h2>
        <p>
          <Link className={styles.subtitle} href={'competitions'}>
            view other available leagues
          </Link>
        </p>
      </div>
      <div className={styles.categories}>
        {Leagues.map((league, index) => (
          <div key={index} className={styles.category}>
            <Link href={`competitions/${league.apiId}`}>
              <img className={styles.emblem} src={league.crest} alt="emblem" loading="lazy" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaguesSection;
