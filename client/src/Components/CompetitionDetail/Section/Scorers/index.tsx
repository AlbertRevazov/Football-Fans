import React, { FC } from 'react';
import { Scorers } from '@/types/Competitions';
import styles from './LeagueScorers.module.scss';

interface ILeagueScorersProps {
  data: Scorers[] | undefined;
}

export const LeagueScorers: FC<ILeagueScorersProps> = ({ data }) => {
  return (
    <div className={styles.scorers}>
      <h1>League Scorers</h1>
      <ul>
        {data?.map((el) => (
          <li key={el.player.id}>
            {el.player.name} {el.goals} - {el.assists || 0}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};
