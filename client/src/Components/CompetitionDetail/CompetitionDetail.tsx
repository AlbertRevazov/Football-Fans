import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCompetitionById } from '@/redux/slices/Competitions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getSeason } from '@/utils/Date';
import CompetitionDetailGroup from './CompetitionDetailGroup';
import CompetitionDetailLeague from './CompetitionDetailLeague';
import CompetitionDetailScorers from './CompetitionDetailScorers';
import Loading from '@/Common/Loader/Loading';
import Error from '@/Common/ErrorComponent/Error';
import styles from './CompetitionsDetail.module.scss';
import CompetitionCalendar from './CompetitionCalendar/CompetitionCalendar';

const CompetitionsDetail: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, errorCode } = useAppSelector((state) => state.tournament);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      dispatch(getCompetitionById(id as string));
    }
  }, [id, dispatch]);

  if (isLoading) return <Loading />;

  if (!!errorCode) {
    return <Error code={errorCode} />;
  }
  const content = toggle ? (
    !!data?.scorers?.length && <CompetitionDetailScorers data={data?.scorers} />
  ) : (
    <>
      {data?.table && <CompetitionDetailLeague data={data.table} />}
      {data?.group && <CompetitionDetailGroup data={data.group} />}
    </>
  );
  const currentSeason = data ? getSeason(data.season.startDate, data.season.endDate) : '';
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <main className={styles.content}>
          <header className={styles.header}>
            <div className={styles.title}>
              <h1>{data?.competition.name}</h1>
              <h4>Season: {currentSeason}</h4>
            </div>
            <img
              loading="lazy"
              src={data?.competition.emblem}
              alt="competition emblem"
              className={styles.emblem}
            />
          </header>
          <button className={styles.toggleBtn} onClick={() => setToggle(!toggle)}>
            View {toggle ? 'Table' : 'Scorers'}
          </button>
          <section className={styles.leagueStats}>{content}</section>
          {/* {data?.matches && <CompetitionCalendar data={data.matches} />} */}
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
