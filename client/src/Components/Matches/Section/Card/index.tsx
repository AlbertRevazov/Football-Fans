import React, { FC } from 'react';
import { IGames } from '@/types/Games';
import Link from 'next/link';
import styles from '../../Matches.module.scss';
interface IMatchesCardProps {
  match: IGames;
  isAway: boolean;
}

export const MatchCard: FC<IMatchesCardProps> = ({ match, isAway }) => {
  const team = isAway ? match.awayTeam : match.homeTeam;
  const score = isAway
    ? `${match.score.fullTime.away || 0} ${team.name}`
    : `${team.name} ${match.score.fullTime.home || 0}`;

  return (
    <article className={styles[`${isAway ? 'away' : 'home'}Team`]}>
      <Link href={`/teams/${team.id}`}>{score}</Link>
      <figure className={styles.figure}>
        <img className={styles.img} src={team.crest} alt={'team emblem'} loading="lazy" />
      </figure>
    </article>
  );
};
