import React, { FC } from 'react';
import { useIsWideScreen } from '@/utils/useIsWideScreen';
import { IGames } from '@/types/GamesTypes';
import styles from './matches-card.module.scss';

interface IMatchesCardProps {
  match: IGames;
}

const MatchCard: FC<IMatchesCardProps> = ({ match }) => {
  const { awayTeam, homeTeam, score } = match;
  const isWide = useIsWideScreen();
  const isFinished = match.status === 'FINISHED';
  return (
    <>
      <article className={styles.homeTeam}>
        <figure className={styles.figure}>
          <img className={styles.img} src={homeTeam.crest} alt={'team emblem'} loading="lazy" />
        </figure>
        <div className={styles.homeLink}>
          <p className={styles.homeTeamName}>{homeTeam.shortName}</p>
          {isFinished && <h5 className={styles.score}> {score.fullTime.home || 0}</h5>}
        </div>
      </article>
      {isWide ? '-' : null}
      <article className={styles.awayTeam}>
        <figure className={styles.figure}>
          <img className={styles.img} src={awayTeam.crest} alt={'team emblem'} loading="lazy" />
        </figure>
        <div className={styles.awayLink}>
          {isFinished && <h5 className={styles.score}> {score.fullTime.away || 0}</h5>}
          <p className={styles.awayTeamName}>{awayTeam.shortName}</p>
        </div>
      </article>
    </>
  );
};
export default MatchCard;
