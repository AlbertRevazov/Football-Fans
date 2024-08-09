import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCompetitionById } from '@/redux/slices/Competitions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getSeason } from '@/utils/Date';
import  Loader  from '@/common/Loading/Loading';
import Error from '@/common/Error';
import styles from './CompetitionsDetail.module.scss';
import CompetitionDetailGroup from './CompetitionDetailGroup';
import CompetitionDetailLeague from './CompetitionDetailLeague';
import CompetitionDetailScorers from './CompetitionDetailScorers';

const CompetitionsDetail: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, errorCode } = useAppSelector((state) => state.tournament);

  useEffect(() => {
    if (id) {
      dispatch(getCompetitionById(id as string));
    }
  }, [id, dispatch]);

  if (isLoading) return <Loader />;

  if (!!errorCode) {
    return <Error code={errorCode} />;
  }

  const currentSeason = data ? getSeason(data.season.startDate, data.season.endDate) : '';

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <main className={styles.content}>
          <header className={styles.header}>
            <h1>{data?.competition.name}</h1>
            <p>Season: {currentSeason}</p>
          </header>
          <img
            loading="lazy"
            src={data?.competition.emblem}
            alt="competition emblem"
            className={styles.emblem}
          />
          <section className={styles.leagueStats}>
            {!data?.table ? <CompetitionDetailGroup /> : <CompetitionDetailLeague />}
            {!!data?.scorers?.length && <CompetitionDetailScorers data={data?.scorers} />}
          </section>
          {!data?.table && (
            <footer className={styles.footer}>
              <h6 className={styles.note}>
                * Данные получены из бесплатного ресурса, который не предоставляет данные о сетке
                плей офф, в будущем планируем масштабирование в том числе расширенную подписку
              </h6>
            </footer>
          )}
        </main>
      </div>
    </div>
  );
};
export default CompetitionsDetail;
