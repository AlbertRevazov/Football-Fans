import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { MatchStatuses } from '@/data';
import { getMatchesList } from '@/redux/slices/Games';
import Loading from '@/common/Loading/Loading';
import Error from '@/common/Error';
import Link from 'next/link';
import styles from './Matches.module.scss';
import MatchesCard from './MatchesCard';
import MatchesInfo from './MatchesInfo';

const Matches: FC = () => {
  const { games, isLoading, errorCode } = useAppSelector((s) => s.matches);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMatchesList());
  }, []);

  if (isLoading) {
    return <Loading />;
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
              <MatchesInfo match={match} />
              <div className={styles.teams}>
                <MatchesCard match={match} isAway={false} />
                -
                <MatchesCard match={match} isAway={true} />
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
export default Matches;
