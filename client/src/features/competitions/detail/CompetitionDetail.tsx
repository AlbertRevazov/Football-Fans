import React, { FC, useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import {
  getCalendarByCompetition,
  getCompetitionById,
  getCompetitionByMatchDay,
  getScorersByCompetition
} from '@/redux/Slices/Competitions'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getSeason } from '@/shared/utils/Date'
import { renderBlockContent } from './renderBlockContent'
import Header from './header'
import BlockToggleButtons from './blockToggleButtons'
import CompetitionFooter from './competitionFooter'
import Error from '@/shared/components/error'
import Loading from '@/shared/components/loader'
import styles from './competition-detail.module.scss'
import { CompetitionRequestTypes } from '@/shared/data'

const CompetitionsDetail: FC = () => {
  const {
    data: competitionData,
    scorers,
    matches,
    isLoading,
    errorCode
  } = useAppSelector(state => state.tournament)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const competitionId = router.query.id as string
  const [activeBlock, setActiveBlock] = useState<'table' | 'scorers' | 'calendar'>('table')
  const seasonYear = competitionData?.season.startDate.slice(0, 4)
  const currentSeason = competitionData
    ? getSeason(competitionData.season.startDate, competitionData.season.endDate)
    : ''
  const [selectedMatchDay, setSelectedMatchDay] = useState(competitionData?.season.currentMatchday)

  const handleBlockChange = useCallback(
    (type: 'table' | 'scorers' | 'calendar', season: string) => {
      setActiveBlock(type)
      switch (type) {
        case 'table':
          return dispatch(getCompetitionById(competitionId))
        case 'scorers':
          return dispatch(getScorersByCompetition({ id: competitionId, date: season }))
        case 'calendar':
          return dispatch(getCalendarByCompetition({ id: competitionId, date: season }))
        default:
          return null
      }
    },
    [dispatch, competitionId]
  )

  useEffect(() => {
    if (competitionId && !competitionData) {
      dispatch(getCompetitionById(competitionId))
    }
  }, [competitionId, competitionData, dispatch])

  if (errorCode) return <Error code={errorCode} />

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
            onBlockChange={type => {
              handleBlockChange(type, seasonYear as string)
              setSelectedMatchDay(competitionData?.season.currentMatchday)
            }}
          />
          {activeBlock !== 'scorers' && (
            <section className={styles.matchDay}>
              <h4 className={styles.dayTitle}>Sort by MatchDay</h4>
              <select
                className={styles.dayList}
                value={selectedMatchDay}
                onChange={e => {
                  setSelectedMatchDay(+e.target.value)
                  dispatch(
                    getCompetitionByMatchDay({
                      id: competitionId,
                      day: String(e.target.value),
                      season: currentSeason.split('/')[0],
                      type: CompetitionRequestTypes[activeBlock]
                    })
                  )
                }}>
                {Array.from({ length: competitionData?.season.currentMatchday || 0 }, (_, i) => (
                  <option className={styles.day} key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </section>
          )}
          {isLoading ? (
            <Loading />
          ) : (
            <section className={styles.leagueStats}>
              {renderBlockContent({
                activeBlock,
                scorers,
                matches,
                competitionData
              })}
            </section>
          )}
          <CompetitionFooter code={competitionData?.competition.code as string} />
        </main>
      </div>
    </div>
  )
}

export default CompetitionsDetail
