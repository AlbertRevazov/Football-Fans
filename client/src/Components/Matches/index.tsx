import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getMatchesList } from '@/redux/Slices/Games';
import { MatchCard } from '@/Components/Matches/Section/Card';
import { TournamentInfo } from './Section/Info';
import { ApiErrors, MatchStatuses } from '@/data';
import { Loader } from '@/Common/Loading';
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
    <section>
      <div className={styles.container}>
        <h2>{games?.length ? 'Ближайшие матчи' : 'Матчей не найдено'}</h2>

        {games?.map((match) => (
          // линк не на весь блок
          <article key={match.id} className={styles.card}>
            <Link href={`/matches/${match.id}`}>
              <TournamentInfo match={match} />
              <div className={styles.teams}>
                <MatchCard match={match} isAway={false} />
                -
                <MatchCard match={match} isAway={true} />
              </div>
              <div className={styles.status}>
                {MatchStatuses[match.status as keyof typeof MatchStatuses]}
              </div>
            </Link>
          </article>
        ))}
      </div>
      <p className={styles.note}>
        * Не всегда корректно отображается день игры из-за часовых поясов
      </p>
    </section>
  );
};
