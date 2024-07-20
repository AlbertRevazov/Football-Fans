import React, { FC } from 'react';
import { IHead2Head } from '@/types/Games';
import styles from '../../MatchesDetail.module.scss';

interface HeadSectionProps {
  data: IHead2Head;
}

export const HeadSection: FC<HeadSectionProps> = ({ data }) => {
  const { awayTeam, homeTeam, numberOfMatches, totalGoals } = data;
  return (
    <section className={styles.head2head}>
      <h3>История противостояний в последних {numberOfMatches} матчах</h3>
      <ul className={styles.ul}>
        <li>
          {homeTeam.wins} - Побед - {awayTeam.wins}
        </li>
        <li>Ничьи - {awayTeam.draws}</li>
        <li>Всего забито голов - {totalGoals}</li>
      </ul>
    </section>
  );
};
