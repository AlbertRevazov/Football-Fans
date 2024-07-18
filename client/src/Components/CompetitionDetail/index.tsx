import React, { FC, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { getCompetitionById } from '@/redux/Slices/Competitions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { LeagueTable } from './Section/Table';
import { LeagueScorers } from './Section/Scorers';
import { GroupTable } from './Section/GroupTable';
import { Loader } from '@/Common/Loading';
import { ApiErrors } from '@/data';
import styles from './CompetitionsDetail.module.scss';

export const CompetitionsDetail: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, errorCode, status } = useAppSelector((state) => state.tournament);

  useEffect(() => {
    if (id) {
      dispatch(getCompetitionById(id as string));
    }
  }, [id, dispatch]);

  const getSeason = useCallback((startDate: string, endDate: string) => {
    const startYear = startDate?.substring(0, 4);
    const endYear = endDate?.substring(0, 4);
    return `${startYear}/${endYear}`;
  }, []);

  if (isLoading) return <Loader />;

  if (status && errorCode) {
    return <div className={styles.container}>Error: {ApiErrors[errorCode]}</div>;
  }

  const currentSeason = data ? getSeason(data.season.startDate, data.season.endDate) : '';

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.wrap}>
            <div className={styles.header}>
              <h1>{data?.competition.name}</h1>
              <p>Season: {currentSeason}</p>
            </div>
            <img
              loading="lazy"
              src={data?.competition.emblem}
              alt="emblem"
              className={styles.emblem}
            />
          </div>

          <div className={styles.leagueStats}>
            {!data?.table ? <GroupTable /> : <LeagueTable />}
            <LeagueScorers data={data?.scorers} />
          </div>

          {!data?.table && (
            <h6 className={styles.ps}>
              * Данные получены из бесплатного ресурса, который не предоставляет данные о сетке плей
              офф, в будущем планируем масштабирование в том числе расширенную подписку
            </h6>
          )}
        </div>
      </div>
    </div>
  );
};
