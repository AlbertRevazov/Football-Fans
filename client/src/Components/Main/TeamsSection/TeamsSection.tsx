import React, { FC } from 'react';
import { TeamsForMain } from '@/data';
import styles from './TeamsSection.module.scss';
import Card from '@/common/Card';
import Link from 'next/link';

const TeamsSection: FC = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/teams">
        Choose your favorite team {">"}
      </Link>
      <div className={styles.teamList}>
        {TeamsForMain.map((team) => (
          <Card league={team} link={`/teams/${team.apiId}`} key={team.id} />
        ))}
      </div>
    </div>
  );
};

export default TeamsSection;
