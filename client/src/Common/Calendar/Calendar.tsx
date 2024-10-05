import React, { FC, useState } from 'react';
import { IGames } from '@/types/Games';
import { MatchStatuses } from '@/data';
import { DateFormate } from '@/utils/Date';
import MatchesCard from '@/Common/MatchesCard';
import Link from 'next/link';
import CButton from '@/Common/Button';
import styles from './Calendar.module.scss';

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
      {visibleCount < data.length && <CButton onClick={loadMore} title="Загрузить ещё" />}
    </section>
  );
};

export default Calendar;
