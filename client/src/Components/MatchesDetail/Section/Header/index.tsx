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
  const { awayTeam, homeTeam, competition } = data;

  return (
    <div className={styles.headerRoot}>
      <div className={styles.competitionInfo}>
        <p>{competition.name}</p>
        <p>{DateFormate(data.utcDate)}</p>
        <p>{MatchStages[data.stage as keyof typeof MatchStages]}</p>
      </div>
      <div className={styles.teamsWrapper}>
        <div className={styles.team}>
          <img className={styles.img} src={homeTeam.crest} alt="home team emblem" loading="lazy" />
          <Link href={`/teams/${homeTeam.id}`}> {homeTeam.name}</Link>
        </div>
        {data.score.fullTime.home || ''} - {data.score.fullTime.away || ''}
        <div className={styles.team}>
          <Link href={`/teams/${awayTeam.id}`}>{awayTeam.name}</Link>
          <img className={styles.img} src={awayTeam.crest} alt="away team emblem" loading="lazy" />
        </div>
      </div>
      {!!data.venue && <>Stadium - {data.venue}</>}
      <br />
      {!!data.referees[0]?.id && (
        <>
          Referee - {data.referees[0]?.name}({data.referees[0]?.nationality})
        </>
      )}
    </div>
  );
};
