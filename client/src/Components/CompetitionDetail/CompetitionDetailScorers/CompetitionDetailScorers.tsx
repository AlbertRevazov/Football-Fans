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
      <ul className={styles.list}>
        <li className={styles.header}>
          <span className={styles.position}></span>
          <span className={styles.link}>Player</span>
          <span className={styles.goals}>G</span>
          <span className={styles.assists}>A</span>
          <span className={styles.played}>PM</span>
          <span className={styles.penalties}>PEN</span>
        </li>
        {data?.map((el, idx) => (
          <li key={el.player.id} className={styles.man}>
            <span className={styles.position}> {idx + 1}</span>
            <Link href={`/persons/${el.player.id}`} className={styles.link}>
              <img className={styles.crest} src={el.team.crest} alt="team crest" />
              {el.player.name}
            </Link>
            <span className={styles.goals}>{el.goals || 0}</span>
            <span className={styles.assists}>{el.assists || 0}</span>
            <span className={styles.played}>{el.playedMatches}</span>
            <span className={styles.penalties}>{el.penalties || 0}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default CompetitionDetailScorers;
