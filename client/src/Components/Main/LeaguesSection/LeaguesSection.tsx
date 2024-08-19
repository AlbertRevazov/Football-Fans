import React, { FC } from 'react';
import { Leagues } from '@/data';
import Card from '@/common/Card';
import Link from 'next/link';
import styles from './LeaguesSection.module.scss';

const LeaguesSection: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.subtitle}>
          <Link href="/competitions">Kick Off</Link>
        </p>
        <h2 className={styles.title}>Top Leagues</h2>
      </div>
      <div className={styles.leaguesList}>
        {Leagues.map((league) => (
          <Card data={league} link={`/competitions/${league.apiId}`} key={league.id} />
        ))}
      </div>
    </div>
  );
};

export default LeaguesSection;
