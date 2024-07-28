import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getTeamById } from '@/redux/Slices/Team';
import { Squad } from './Section/Squad';
import { TeamInfo } from './Section/Information';
import { Loader } from '@/Common/Loading';
import { ApiErrors } from '@/data';
import styles from './TeamsDetail.module.scss';

export const TeamsDetail: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { team, isLoading, status } = useAppSelector((s) => s.team);

  useEffect(() => {
    if (id) {
      dispatch(getTeamById(id as string));
    }
  }, [id]);

  if (isLoading) return <Loader />;

  if (status !== 200) {
    return <div className={styles.container}>Error: {ApiErrors[team?.errorCode as string]}</div>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{team?.name}</h1>
          <img loading="lazy" src={team?.crest} alt="team emblem" className={styles.emblem} />
        </header>
        <main className={styles.mainContent}>
          <TeamInfo />
          <Squad />
        </main>
      </div>
    </div>
  );
};
