import React, { FC } from 'react';
import { Scorers } from '@/types/Competitions';
import styles from './LeagueScorers.module.scss';
import Link from 'next/link';

interface ILeagueScorersProps {
  data: Scorers[] | undefined;
}

const CompetitionDetailScorers: FC<ILeagueScorersProps> = ({ data }) => {
  return (
    <section className={styles.scorers}>
      <h1>League Scorers</h1>
      <ul className={styles.scorersList}>
        {data?.map((el) => (
          <li key={el.player.id} className={styles.scorerItem}>
            <Link href={`/persons/${el.player.id}`} className={styles.scorerLink}>
              {el.player.name}
            </Link>
            {el.goals} - {el.assists || 0}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default CompetitionDetailScorers;
