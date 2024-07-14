import React, { FC } from 'react';
import { IGames } from '@/types/Games';
import Link from 'next/link';
import styles from '../../Matches.module.scss';
interface IMatchesCardProps {
  match: IGames;
  isAway: boolean;
}

export const MatchesCard: FC<IMatchesCardProps> = ({ match, isAway }) => {
  const team = isAway ? match.awayTeam : match.homeTeam;
  const teamArea = isAway ? (
    <>
      {match.score.fullTime.away} {match.awayTeam.name}
    </>
  ) : (
    <>
      {match.homeTeam.name} {match.score.fullTime.home}
    </>
  );
  return (
    <div className={styles[isAway ? 'awayTeam' : 'homeTeam']}>
      <Link
        href={{
          pathname: `teams/${team.id}`,
        }}
      >
        {teamArea}
      </Link>
      <img
        className={styles.img}
        src={isAway ? match.awayTeam.crest : match.homeTeam.crest}
        alt="awayTeam crest"
      />
    </div>
  );
};
