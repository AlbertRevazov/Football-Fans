import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getMatchesList } from '@/redux/Slices/Games';
import { MatchesCard } from '@/Components/Matches/Section/Card';
import { MatchesHeader } from './Section/Header';
import { ApiErrors, MatchStatuses } from '@/data';
import { Loader } from '@/Com\mon/Loading';
import styles from './Matches.module.scss';
import Link from 'next/link';

export const Matches: FC = () => {
  const dispatch = useAppDispatch();
  const { games, isLoading, status, errorCode } = useAppSelector((s) => s.matches);

  useEffect(() => {
    dispatch(getMatchesList());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (!!errorCode && !!status) {
    return <div className={styles.container}>Ошибка: {ApiErrors[errorCode]}</div>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2>Ближайшие матчи</h2>
        {games?.map((match) => (
          <Link
            key={match.id}
            className={styles.card}
            href={{
              pathname: `matches/${match.id}`,
            }}
          >
            <MatchesHeader match={match} />
            <div className={styles.teams}>
              <MatchesCard match={match} isAway={false} />
              -
              <MatchesCard match={match} isAway={true} />
            </div>
            <div>{MatchStatuses[match.status as keyof typeof MatchStatuses]}</div>
          </Link>
        ))}
      </div>
      <h6 className={styles.ps}>
        * Не всегда корректно отображается день игры из-за часовых поясов
      </h6>
    </div>
  );
};
