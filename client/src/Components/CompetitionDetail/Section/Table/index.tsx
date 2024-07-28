import React, { FC } from 'react';
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import styles from './LeagueTable.module.scss';

export const LeagueTable: FC = () => {
  const { data } = useAppSelector((s) => s.tournament);

  return (
    <section className={styles.table}>
      <h1>League Table</h1>
      <ul className={styles.leagueList}>
        {data?.table.map((el) => (
          <li key={el.team.id} className={styles.leagueItem}>
            {el.position}
            <Link
              href={`/teams/${el.team.id}`}
              as={`/teams/${el.team.id}`}
              className={styles.teamLink}
            >
              {el.team.shortName}
            </Link>
            - {el.points} points
          </li>
        ))}
      </ul>
    </section>
  );
};
