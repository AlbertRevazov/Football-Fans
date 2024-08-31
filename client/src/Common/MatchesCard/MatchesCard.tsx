import React, { FC } from 'react';
import { IGames } from '@/types/Games';
import { useIsWideScreen } from '@/utils/useIsWideScreen';
import styles from './MatchesCard.module.scss';

interface IMatchesCardProps {
  match: IGames;
  isAway: boolean;
}

const MatchCard: FC<IMatchesCardProps> = ({ match, isAway }) => {
  const { awayTeam, homeTeam, score } = match;
  const team = isAway ? awayTeam : homeTeam;
  const currScore = isAway ? score.fullTime.away ?? '' : score.fullTime.home ?? '';
  const isWide = useIsWideScreen();

  return (
    <article className={styles[`${isAway ? 'away' : 'home'}Team`]}>
      <div className={isAway ? styles.awayLink : styles.homeLink}>
        {team.shortName}
        {!isWide && match.status === 'FINISHED' ? ' -' : ''} {currScore}
      </div>
      <figure className={styles.figure}>
        <img className={styles.img} src={team.crest} alt={'team emblem'} loading="lazy" />
      </figure>
    </article>
  );
};
export default MatchCard;
