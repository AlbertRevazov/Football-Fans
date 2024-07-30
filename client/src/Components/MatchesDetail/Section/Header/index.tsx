import React, { FC } from 'react';
import { IGames } from '@/types/Games';
import { MatchStages } from '@/data';
import { DateFormate } from '@/utils/Date';
import Link from 'next/link';
import styles from '../../MatchesDetail.module.scss';

interface IHeaderProps {
  data: IGames;
}

export const HeaderDetailMatch: FC<IHeaderProps> = ({ data }) => {
  const { awayTeam, homeTeam, competition, score } = data;
  const { fullTime } = score;
  return (
    <main className={styles.headerRoot}>
      <section className={styles.competitionInfo}>
        <p>{competition.name}</p>
        <time dateTime={data.utcDate}>{DateFormate(data.utcDate)}</time>
        <p>{MatchStages[data.stage as keyof typeof MatchStages]}</p>
      </section>

      <section className={styles.teamsWrapper}>
        <div className={styles.team}>
          <figure className={styles.figure}>
            <img
              className={styles.img}
              src={homeTeam.crest}
              alt="home team emblem"
              loading="lazy"
            />
            <figcaption>
              <Link href={`/teams/${homeTeam.id}`}>{homeTeam.name}</Link>
            </figcaption>
          </figure>
        </div>
        <span>
          {fullTime.home || 0} - {fullTime.away || 0}
        </span>
        <div className={styles.team}>
          <figure className={styles.figure}>
            <img
              className={styles.img}
              src={awayTeam.crest}
              alt="away team emblem"
              loading="lazy"
            />
            <figcaption>
              <Link href={`/teams/${awayTeam.id}`}>{awayTeam.name}</Link>
            </figcaption>
          </figure>
        </div>
      </section>

      {data.venue && <p>Stadium - {data.venue}</p>}
      {data.referees[0]?.id && (
        <p>
          Referee - {data.referees[0]?.name} ({data.referees[0]?.nationality})
        </p>
      )}
    </main>
  );
};
