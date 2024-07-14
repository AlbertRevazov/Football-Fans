import React, { FC } from 'react';
import { IHead2Head } from '@/types/Games';
import styles from '../../MatchesDetail.module.scss';

interface HeadSectionProps {
  data: IHead2Head;
}

export const HeadSection: FC<HeadSectionProps> = ({ data }) => {
  const { awayTeam, homeTeam, numberOfMatches, totalGoals } = data;
  return (
    <div className={styles.head2head}>
      История противостояний в последних {numberOfMatches} матчах
      <ul className={styles.ul}>
        <li>
          {homeTeam.wins} - Побед - {awayTeam.wins}{' '}
        </li>
        <li>
          {homeTeam.losses} - Поражений - {awayTeam.losses}
        </li>
        <li>
          {homeTeam.draws} - Ничьи - {awayTeam.draws}
        </li>
      </ul>
      Всего забито голов - {totalGoals}
    </div>
  );
};
