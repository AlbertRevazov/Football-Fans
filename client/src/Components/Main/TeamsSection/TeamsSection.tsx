import React, { FC } from 'react';
import { TeamsForMain } from '@/data';
import Card from '@/common/Card';
import Link from 'next/link';
import styles from './TeamsSection.module.scss';

const TeamsSection: FC = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/teams">
        Choose your favorite team {'>'}
      </Link>
      <div className={styles.teamList}>
        {TeamsForMain.map((team) => (
          <Card data={team} link={`/teams/${team.apiId}`} key={team.id} />
        ))}
      </div>
    </div>
  );
};

export default TeamsSection;
