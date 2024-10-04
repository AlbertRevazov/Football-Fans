import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  getCalendarByCompetition,
  getCompetitionById,
  getScorersByCompetition,
} from '@/redux/slices/Competitions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getSeason } from '@/utils/Date';
import { IGames } from '@/types/Games';
import CompetitionDetailGroup from './CompetitionDetailGroup';
import CompetitionDetailLeague from './CompetitionDetailLeague';
import CompetitionDetailScorers from './CompetitionDetailScorers';
import CompetitionCalendar from './CompetitionCalendar/CompetitionCalendar';
import Loading from '@/Common/Loader/Loading';
import Error from '@/Common/ErrorComponent/Error';
import styles from './CompetitionsDetail.module.scss';

const CompetitionsDetail: FC = () => {
  const { data, scorers, matches, isLoading, errorCode } = useAppSelector(
    (state) => state.tournament
  );
  const dispatch = useAppDispatch();
  const router = useRouter();
  const id = router.query.id as string;
  const [block, setBlock] = useState<'table' | 'scorers' | 'calendar'>('table');
  const date = data?.season.startDate.slice(0, 4);
  const currentSeason = data ? getSeason(data.season.startDate, data.season.endDate) : '';

  const toggleHandler = (type: 'table' | 'scorers' | 'calendar', data: string) => {
    setBlock(type);
    switch (type) {
      case 'table':
        return dispatch(getCompetitionById(id));
      case 'scorers':
        return dispatch(getScorersByCompetition({ id, date: data }));
      case 'calendar':
        return dispatch(getCalendarByCompetition({ id, date: data }));
      default:
        return null;
    }
  };

  useEffect(() => {
    if (id && !data) {
      dispatch(getCompetitionById(id));
    }
    return setBlock('table');
  }, [id, date, dispatch]);

  if (isLoading) return <Loading />;
  if (errorCode) return <Error code={errorCode} />;

  const renderContent = () => {
    switch (block) {
      case 'scorers':
        return !!scorers?.length && <CompetitionDetailScorers data={scorers} />;
      case 'table':
        return (
          <>
            {data?.table && <CompetitionDetailLeague data={data.table} />}
            {data?.group && <CompetitionDetailGroup data={data.group} />}
          </>
        );
      case 'calendar':
        return matches && <CompetitionCalendar data={matches as IGames[]} />;
      default:
        return null;
    }
  };

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
          <div className={styles.buttonsGroup}>
            {['table', 'scorers', 'calendar'].map((type) => (
              <button
                key={type}
                className={styles.toggleBtn}
                onClick={() =>
                  toggleHandler(type as 'table' | 'scorers' | 'calendar', date as string)
                }
                disabled={block === type}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
          <section className={styles.leagueStats}>{renderContent()}</section>
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
