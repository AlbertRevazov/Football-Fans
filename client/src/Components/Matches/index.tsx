import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Loader } from '@/common/Loading';
import { MatchStatuses } from '@/data';
import { TournamentInfo } from './Section/Info';
import { MatchCard } from './Section/Card';
import { getMatchesList } from '@/redux/slices/Games';
import { Error } from '@/common/Error';
import Link from 'next/link';
import styles from './Matches.module.scss';

export const Matches: FC = () => {
  const { games, isLoading, errorCode } = useAppSelector((s) => s.matches);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMatchesList());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!!errorCode) {
    return <Error code={errorCode} />;
  }

  return (
    <section>
      <div className={styles.container}>
        <h2>{games?.length ? 'Ближайшие матчи' : 'Матчей не найдено'}</h2>

        {games?.map((match) => (
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
