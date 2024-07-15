import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getTeamById } from '@/redux/Slices/Team';
import { Squad } from './Section/Squad';
import { TeamInfo } from './Section/Information';
import { Loader } from '@/Common/Loading';
import styles from './TeamsDetail.module.scss';

export const TeamsDetail: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { team, isLoading } = useAppSelector((s) => s.team);

  useEffect(() => {
    if (id) {
      dispatch(getTeamById(id as string));
    }
  }, [id]);

  if (!team || isLoading) return <Loader />;

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <>
          <div className={styles.wrap}>
            <div className={styles.header}>
              <h1>{team.name}</h1>
            </div>
            <img loading="lazy" src={team.crest} alt="emblem" className={styles.emblem} />
          </div>
          <div className={styles.content}>
            <TeamInfo />
            <Squad />
          </div>
        </>
      </div>
    </div>
  );
};
