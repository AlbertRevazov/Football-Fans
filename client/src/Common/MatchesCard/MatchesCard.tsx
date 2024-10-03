import React, { FC } from 'react';
import { IGames } from '@/types/Games';
import { useIsWideScreen } from '@/utils/useIsWideScreen';
import styles from './MatchesCard.module.scss';

interface IMatchesCardProps {
  match: IGames;
}

const MatchCard: FC<IMatchesCardProps> = ({ match }) => {
  const { awayTeam, homeTeam, score } = match;
  const isWide = useIsWideScreen();

  return (
    <>
      <article className={styles.homeTeam}>
        <figure className={styles.figure}>
          <img className={styles.img} src={homeTeam.crest} alt={'team emblem'} loading="lazy" />
        </figure>
        <div className={styles.homeLink}>
          <p>{homeTeam.shortName}</p>
          <h5>{score.fullTime.home || 0}</h5>
        </div>
      </article>
      {isWide ? <span className={styles.row}>-</span> : null}
      <article className={styles.awayTeam}>
        <figure className={styles.figure}>
          <img className={styles.img} src={awayTeam.crest} alt={'team emblem'} loading="lazy" />
        </figure>
        <div className={styles.awayLink}>
          <h5>{score.fullTime.away || 0}</h5>
          <p>{awayTeam.shortName}</p>
        </div>
      </article>
    </>
  );
};
export default MatchCard;
