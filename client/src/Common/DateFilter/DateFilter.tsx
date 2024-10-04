import React, { FC } from 'react';
import { useDateFilterHook } from './hooks';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/redux/hooks';
import { useIsWideScreen } from '@/utils/useIsWideScreen';
import styles from './DateFilter.module.scss';

interface IDateFilter {
  isYear?: boolean;
}

const DateFilter: FC<IDateFilter> = ({ isYear }) => {
  const router = useRouter();
  const isWide = useIsWideScreen();
  const { id } = router.query;
  const { days, years, selected, handleYear, handleDays } = useDateFilterHook(isYear as boolean);
  const { data } = useAppSelector((s) => s.tournament);

  if (data?.competition.type === 'CUP') {
    return null;
  }

  switch (isYear) {
    case true:
      return (
        <div className={styles.container}>
          <div className={styles.datePicker}>
            {years.map((year) => (
              <div
                key={year}
                data-date={year}
                className={`${selected === year ? styles.selected : styles.block}`}
                onClick={handleYear(id as string)}
              >
                {`${year}/${+year + 1}`}
              </div>
            ))}
          </div>
        </div>
      );

    case false:
      return (
        <div className={styles.container}>
          <div className={styles.datePicker}>
            {days.map((block) => (
              <div
                key={block.date}
                data-date={block.date}
                className={`${styles.dateBlock} ${
                  selected === block.date ? styles.selected : styles.block
                }`}
                onClick={handleDays}
              >
                {!isWide ? block.formattedDate.split(' ')[0] : block.formattedDate}
              </div>
            ))}
          </div>
        </div>
      );
  }
};
export default DateFilter;
