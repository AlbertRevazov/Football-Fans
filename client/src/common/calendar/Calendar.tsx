import React, { FC, useState } from 'react';
import { IGames } from '@/types/GamesTypes';
import { MatchStatuses } from '@/data';
import { DateFormate } from '@/utils/Date';
import Link from 'next/link';
import MatchesCard from '@/common/matchesCard';
import styles from './calendar.module.scss';

interface ICalendarProps {
  data: IGames[];
}

const Calendar: FC<ICalendarProps> = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const list = data.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <section className={styles.calendar}>
      {list.map((match) => (
        <Link key={match.id} className={styles.teams} href={`/matches/${match.id}`}>
          <MatchesCard match={match} />
          <p className={styles.status}>
            {MatchStatuses[match.status as keyof typeof MatchStatuses]}
          </p>
          <p className={styles.date}>{DateFormate(match.utcDate, true)}</p>
        </Link>
      ))}
      {visibleCount < data.length && (
        <div className={styles.loadBtn} onClick={loadMore}>
          Load More
        </div>
      )}
    </section>
  );
};

export default Calendar;
