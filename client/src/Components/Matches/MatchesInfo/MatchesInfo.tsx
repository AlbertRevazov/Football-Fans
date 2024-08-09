import React, { FC } from 'react';
import { IGames } from '@/types/Games';
import { DateFormate } from '@/utils/Date';
import Link from 'next/link';
import styles from './Info.module.scss';

interface IMatchesInfoPRops {
  match: IGames;
}

const MatchesInfo: FC<IMatchesInfoPRops> = ({ match }) => {
  return (
    <section className={styles.tournament}>
      <div className={styles.matchday}>
        <p>Тур {match.matchday}</p>
        <time dateTime={match.utcDate}>{DateFormate(match.utcDate)}</time>
      </div>
      <Link className={styles.competition} href={`/competitions/${match.competition.code}`}>
        <figure className={styles.figure}>
          <figcaption>{match.competition.name}</figcaption>
          <img
            className={styles.img}
            src={match.competition.emblem}
            alt="competition crest"
            loading="lazy"
          />
        </figure>
      </Link>
    </section>
  );
};
export default MatchesInfo;
