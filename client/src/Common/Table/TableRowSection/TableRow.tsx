import React, { FC } from 'react';
import { Table } from '@/types/Competitions';
import Link from 'next/link';
import styles from '../Table.module.scss';

const TableRow: FC<{ el: Table }> = ({ el }) => (
  <li key={el.team.id} className={styles.item}>
    <span className={styles.position}>{el.position}</span>
    <span className={styles.team}>
      <Link href={`/teams/${el.team.id}`} as={`/teams/${el.team.id}`} className={styles.link}>
        <img className={styles.crest} src={el.team.crest} loading="lazy" alt="team crest" />
        {el.team.shortName}
      </Link>
    </span>
    <span className={styles.points}>{el.points}</span>
    <span className={styles.games}>{el.playedGames}</span>
    <span className={styles.wins}>{el.won}</span>
    <span className={styles.draws}>{el.draw}</span>
    <span className={styles.losses}>{el.lost}</span>
    <span className={styles.goalsFor}>{el.goalsFor}</span>
    <span className={styles.goalsAgainst}>{el.goalsAgainst}</span>
    <span className={styles.goalDifference}>{el.goalDifference}</span>
  </li>
);
export default TableRow;
