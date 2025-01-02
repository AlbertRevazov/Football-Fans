import React, { FC, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import {
  getCalendarByCompetition,
  getCompetitionById,
  getScorersByCompetition,
} from '@/redux/slices/Competitions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getSeason } from '@/utils/Date';
import { renderBlockContent } from './renderBlockContent';
import CompetitionFooter from './CompetitionFooter';
import BlockToggleButtons from './BlockToggleButtons';
import Header from './Header';
import Loading from '@/components/ui/Loader/Loader';
import Error from '@/components/ui/Error/Error';
import styles from './competition-detail.module.scss';

const CompetitionsDetail: FC = () => {
  const {
    data: competitionData,
    scorers,
    matches,
    isLoading,
    errorCode,
  } = useAppSelector((state) => state.tournament);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const competitionId = router.query.id as string;
  const [activeBlock, setActiveBlock] = useState<'table' | 'scorers' | 'calendar'>('table');
  const seasonYear = competitionData?.season.startDate.slice(0, 4);
  const currentSeason = competitionData
    ? getSeason(competitionData.season.startDate, competitionData.season.endDate)
    : '';

  const handleBlockChange = useCallback(
    (type: 'table' | 'scorers' | 'calendar', season: string) => {
      setActiveBlock(type);
      switch (type) {
        case 'table':
          return dispatch(getCompetitionById(competitionId));
        case 'scorers':
          return dispatch(getScorersByCompetition({ id: competitionId, date: season }));
        case 'calendar':
          return dispatch(getCalendarByCompetition({ id: competitionId, date: season }));
        default:
          return null;
      }
    },
    [dispatch, competitionId]
  );

  useEffect(() => {
    if (competitionId && !competitionData) {
      dispatch(getCompetitionById(competitionId));
    }
    return () => setActiveBlock('table');
  }, [competitionId, competitionData, dispatch]);

  if (isLoading) return <Loading />;
  if (errorCode) return <Error code={errorCode} />;

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <main className={styles.content}>
          <Header
            name={competitionData?.competition.name || ''}
            season={currentSeason}
            emblem={competitionData?.competition.emblem || ''}
          />
          <BlockToggleButtons
            activeBlock={activeBlock}
            onBlockChange={(type) => handleBlockChange(type, seasonYear as string)}
          />
          <section className={styles.leagueStats}>
            {renderBlockContent({
              activeBlock,
              scorers,
              matches,
              competitionData,
            })}
          </section>

          <CompetitionFooter code={competitionData?.competition.code as string} />
        </main>
      </div>
    </div>
  );
};

export default CompetitionsDetail;
