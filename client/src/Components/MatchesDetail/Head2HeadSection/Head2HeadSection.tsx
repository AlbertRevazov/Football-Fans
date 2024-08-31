import React, { FC } from 'react';
import { IHead2Head } from '@/types/Games';
import styles from './Head2HeadSection.module.scss';

interface HeadSectionProps {
  data: IHead2Head;
}

const Head2headSection: FC<HeadSectionProps> = ({ data }) => {
  const { awayTeam, homeTeam, numberOfMatches, totalGoals } = data;
  return (
    <section className={styles.head2head}>
      <h3>История противостояний в последних {numberOfMatches} матчах</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <h4>{homeTeam.wins}</h4> Побед <h4>{awayTeam.wins}</h4>
        </li>
        <li className={styles.listItem}>
          <h4>{awayTeam.losses}</h4> Поражений <h4>{awayTeam.losses}</h4>
        </li>
        <li className={styles.listItem}>
          <h4>{awayTeam.draws}</h4> Ничьи <h4>{awayTeam.draws}</h4>
        </li>
        <li className={styles.total}>
          Всего забито голов <h4>{totalGoals}</h4>
        </li>
      </ul>
    </section>
  );
};

export default Head2headSection;
