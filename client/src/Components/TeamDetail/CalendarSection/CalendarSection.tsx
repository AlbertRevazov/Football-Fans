import React, { FC, useState } from 'react';
import { MatchStatuses } from '@/data';
import { DateFormate } from '@/utils/Date';
import { ITeamSectionProps } from '@/types/Teams';
import CButton from '@/common/CButton';
import Link from 'next/link';
import styles from './CalendarSection.module.scss';

const CalendarSection: FC<ITeamSectionProps> = ({ team }) => {
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <div className={styles.rootCalendar}>
      <h2>Calendar</h2>
      {team.calendar.slice(0, visibleCount).map((match) => {
        const { awayTeam, homeTeam, score, competition, utcDate, matchday, status } = match;

        return (
          <section key={match.id} className={styles.match}>
            <div className={styles.matchHeader}>
              <p>{competition.name}</p>
              <p>Тур {matchday}</p>
            </div>
            <Link className={styles.teams} href={`/matches/${match.id}`}>
              <h4 className={styles.homeTeam}>{homeTeam.shortName}</h4>
              {status === 'FINISHED' ? (
                <>
                  <h4>{score.fullTime.home}</h4> - <h4>{score.fullTime.away}</h4>
                </>
              ) : (
                <>-</>
              )}
              <h4 className={styles.awayTeam}>{awayTeam.shortName}</h4>
            </Link>
            <div className={styles.matchDate}>{DateFormate(utcDate, true)}</div>
            <div>{MatchStatuses[status as keyof typeof MatchStatuses]}</div>
          </section>
        );
      })}
      {visibleCount < team.calendar.length && <CButton onClick={loadMore} title="Загрузить ещё" />}
    </div>
  );
};

export default CalendarSection;
