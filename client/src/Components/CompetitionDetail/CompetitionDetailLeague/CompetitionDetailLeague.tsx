import React, { FC } from 'react';
import { Table } from '@/types/Competitions';
import Link from 'next/link';
import styles from './LeagueTable.module.scss';

interface ICompetitionDetailLeagueProps {
  data: Table[];
}

const CompetitionDetailLeague: FC<ICompetitionDetailLeagueProps> = ({ data }) => {
  return (
    <section className={styles.table}>
      <h1>League Table</h1>
      <ul className={styles.leagueList}>
        <li className={styles.leagueHeader}>
          <span className={styles.position}>Pos</span>
          <span className={styles.team}>Team</span>
          <span className={styles.points}>Pts</span>
          <span className={styles.games}>Games</span>
          <span className={styles.wins}>W</span>
          <span className={styles.draws}>D</span>
          <span className={styles.losses}>L</span>
          <span className={styles.goalsFor}>G</span>
          <span className={styles.goalsAgainst}>LG</span>
          <span className={styles.goalDifference}>GD</span>
        </li>
        {data.map((el) => (
          <li key={el.team.id} className={styles.leagueItem}>
            <span className={styles.position}>{el.position}</span>
            <span className={styles.team}>
              <Link
                href={`/teams/${el.team.id}`}
                as={`/teams/${el.team.id}`}
                className={styles.teamLink}
              >
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
        ))}
      </ul>
    </section>
  );
};
export default CompetitionDetailLeague;
