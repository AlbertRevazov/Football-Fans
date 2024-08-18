import React, { FC } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { DateFormate } from '@/utils/Date';
import { ApiErrors, MatchStatuses } from '@/data';
import Link from 'next/link';
import Loading from '@/common/Loading';
import styles from './CalendarSection.module.scss';

const CalendarSection: FC = () => {
  const { isLoading, team, status } = useAppSelector((s) => s.team);

  if (isLoading) return <Loading />;

  if (status !== 200) {
    return (
      <div className={styles.container}>
        Error: {ApiErrors[team?.errorCode as string]}
        {team?.errorCode}
      </div>
    );
  }
  return (
    <div className={styles.rootCalendar}>
      <h2>Calendar</h2>
      <section className={styles.list}>
        {team?.calendar.map((match) => {
          const { awayTeam, homeTeam, score, competition, utcDate, matchday, status } = match;

          return (
            <section key={match.id} className={styles.match}>
              <p>
                <Link href={`/competitions/${competition.id}`}>{competition.name}</Link>
              </p>
              <p>Тур {matchday}</p>
              <div className={styles.teams}>
                <h4 className={styles.home}>
                  <Link href={`/teams/${homeTeam.id}`}>{homeTeam.shortName}</Link>
                </h4>
                {status === 'FINISHED' ? (
                  <>
                    <h4>{score.fullTime.home}</h4> - <h4>{score.fullTime.away}</h4>
                  </>
                ) : (
                  <>-</>
                )}
                <h4 className={styles.away}>
                  <Link href={`/teams/${awayTeam.id}`}>{awayTeam.shortName}</Link>
                </h4>
              </div>
              <div className={styles.date}>{DateFormate(utcDate, true)}</div>
              <div>{MatchStatuses[status as keyof typeof MatchStatuses]}</div>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default CalendarSection;
