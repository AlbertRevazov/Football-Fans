import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getCompetitionsList } from '@/redux/slices/Competitions';
import Loading from '@/components/ui/Loader/Loader';
import Error from '@/components/ui/Error';
import Link from 'next/link';
import styles from './competitions.module.scss';

const Competitions: FC = () => {
  const dispatch = useAppDispatch();
  const { competitionsList, errorCode, isLoading } = useAppSelector((state) => state.tournament);

  useEffect(() => {
    dispatch(getCompetitionsList());
  }, []);

  if (isLoading) return <Loading />;

  if (!!errorCode) {
    return <Error code={errorCode} />;
  }

  return (
    <div className={styles.container}>
      {competitionsList?.map((competition) => {
        const slug = competition.code;
        return (
          <Link
            key={competition.id}
            href={{
              pathname: 'competitions/[slug]',
              query: { slug },
            }}
            className={styles.cardLink}
          >
            <article className={styles.cardItem}>
              <img
                src={competition.emblem}
                alt="competition emblem"
                loading="lazy"
                className={styles.emblem}
              />
            <p className={styles.area}>({competition.area.name})</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};
export default Competitions;
