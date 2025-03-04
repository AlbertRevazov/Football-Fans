import React, { useState, useEffect, useCallback, FC } from 'react'
import { useRouter } from 'next/router'
import {
  getCalendarByCompetition,
  getCompetitionById,
  getCompetitionByMatchDay,
  getScorersByCompetition
} from '@/redux/Slices/Competitions'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { CompetitionRequestTypes } from '@/shared/data'
import { RenderBlockContent } from '../renderGroup/renderBlockContent'
import { getSeason } from '@/shared/utils/Date'
import CompetitionHeader from './header'
import CompetitionTabButtons from './blockToggleButtons'
import CompetitionFooter from './competitionFooter'
import ErrorMessage from '@/shared/components/error'
import LoadingSpinner from '@/shared/components/loader'
import styles from './competition-detail.module.scss'

const CompetitionsDetail: FC = () => {
  const {
    data: competitionDetails,
    scorers,
    matches,
    isLoading,
    errorCode
  } = useAppSelector(state => state.tournament)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const competitionId = router.query.id as string

  const [activeTab, setActiveTab] = useState<'table' | 'scorers' | 'calendar'>('table')
  const seasonYear = competitionDetails?.season.startDate.slice(0, 4)
  const currentSeason = competitionDetails
    ? getSeason(competitionDetails.season.startDate, competitionDetails.season.endDate)
    : ''
  const [selectedMatchDay, setSelectedMatchDay] = useState(
    competitionDetails?.season.currentMatchday
  )

  // Загрузка данных при монтировании компонента
  useEffect(() => {
    if (competitionId && !competitionDetails) {
      dispatch(getCompetitionById(competitionId))
    }
  }, [competitionId, competitionDetails, dispatch])

  // Обработчик изменения MatchDay
  const handleMatchDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMatchDay = +event.target.value
    setSelectedMatchDay(newMatchDay)
    dispatch(
      getCompetitionByMatchDay({
        id: competitionId,
        day: String(newMatchDay),
        season: currentSeason.split('/')[0],
        type: CompetitionRequestTypes[activeTab]
      })
    )
  }

  // Обработчик переключения вкладок
  const handleTabChange = useCallback(
    (tab: 'table' | 'scorers' | 'calendar', season?: string) => {
      console.log(matches, 'season', scorers)
      setActiveTab(tab)
      switch (tab) {
        case 'table':
          dispatch(getCompetitionById(competitionId))
          break
        case 'scorers':
          if (!scorers?.length) {
            dispatch(
              getScorersByCompetition({
                id: competitionId,
                date: seasonYear
              })
            )
          }
          break
        case 'calendar':
          if (matches?.length === 0) {
            dispatch(
              getCalendarByCompetition({
                id: competitionId,
                date: seasonYear,
                day: String(selectedMatchDay)
              })
            )
          }
          break
        default:
          break
      }
    },
    [dispatch, competitionId, seasonYear]
  )

  if (errorCode) return <ErrorMessage code={errorCode} />

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <main className={styles.content}>
          <CompetitionHeader
            name={competitionDetails?.competition.name || ''}
            season={currentSeason}
            emblem={competitionDetails?.competition.emblem || ''}
          />
          <CompetitionTabButtons activeBlock={activeTab} onBlockChange={handleTabChange} />
          {activeTab !== 'scorers' && (
            <section className={styles.matchDaySelector}>
              <h4 className={styles.matchDayTitle}>Sort by MatchDay</h4>
              <select
                className={styles.matchDayList}
                value={selectedMatchDay}
                onChange={handleMatchDayChange}>
                {Array.from({ length: competitionDetails?.season.currentMatchday || 0 }, (_, i) => (
                  <option className={styles.matchDayOption} key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </section>
          )}
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <section className={styles.leagueStats}>
              <RenderBlockContent
                activeBlock={activeTab}
                scorers={scorers}
                matches={matches}
                competitionData={competitionDetails}
              />
            </section>
          )}
          <CompetitionFooter code={competitionDetails?.competition.code as string} />
        </main>
      </div>
    </div>
  )
}

export default CompetitionsDetail
