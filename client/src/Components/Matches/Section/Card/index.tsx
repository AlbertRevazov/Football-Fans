import React, { FC } from 'react';
import { IGames } from '@/types/Games';
import Link from 'next/link';
import styles from './Card.module.scss';
interface IMatchesCardProps {
  match: IGames;
  isAway: boolean;
}

export const MatchCard: FC<IMatchesCardProps> = ({ match, isAway }) => {
  const team = isAway ? match.awayTeam : match.homeTeam;
  const score = isAway ? `${match.score.fullTime.away || 0}` : `${match.score.fullTime.home || 0}`;

  return (
    <article className={styles[`${isAway ? 'away' : 'home'}Team`]}>
      <Link href={`/teams/${team.id}`} className={isAway ? styles.awayLink : styles.homeLink}>
        <h4>{team.shortName}</h4> <h3>{score}</h3>
      </Link>
      <figure className={styles.figure}>
        <img className={styles.img} src={team.crest} alt={'team emblem'} loading="lazy" />
      </figure>
    </article>
  );
};
