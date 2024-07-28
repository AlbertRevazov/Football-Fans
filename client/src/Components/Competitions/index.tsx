import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getCompetitionsList } from '@/redux/Slices/Competitions';
import { ApiErrors } from '@/data';
import { Loader } from '@/Common/Loading';
import Link from 'next/link';
import styles from './Competitions.module.scss';

export const Competitions: FC = () => {
  const dispatch = useAppDispatch();
  const { competitionsList, status, errorCode, isLoading } = useAppSelector(
    (state) => state.tournament
  );

  useEffect(() => {
    dispatch(getCompetitionsList());
  }, []);

  if (isLoading) return <Loader />;

  if (status !== 200) {
    return <div className={styles.container}>Error: {ApiErrors[errorCode]}</div>;
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
              <p className={styles.competitionName}>{competition.name}</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};
