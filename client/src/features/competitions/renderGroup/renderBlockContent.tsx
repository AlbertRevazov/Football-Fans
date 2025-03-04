import React, { useState, useCallback, FC } from 'react'
import { Scorers, Standings, Table } from '@/types/CompetitionsTypes'
import { IGames } from '../../../types/GamesTypes'
import CompetitionScorers from './scorers'
import CompetitionList from './list'
import Calendar from '@/shared/components/calendar'

type BlockType = 'table' | 'scorers' | 'calendar'

interface RenderBlockContentProps {
  activeBlock: BlockType
  scorers: Scorers[] | null
  matches: IGames[] | null
  competitionData: any
}

export const RenderBlockContent: FC<RenderBlockContentProps> = ({
  activeBlock,
  scorers,
  matches,
  competitionData
}) => {
  // Состояние для таблицы лиги
  const [leagueList, setLeagueList] = useState<Table[]>(
    competitionData?.table ? competitionData.table.slice(0, competitionData.table.length / 2) : []
  )

  // Состояние для таблицы группы
  const [groupList, setGroupList] = useState<Standings[]>(
    competitionData?.group ? competitionData.group.slice(0, competitionData.group.length / 2) : []
  )

  // Функция для загрузки больше данных в таблицу лиги
  const loadMoreLeague = useCallback(() => {
    if (competitionData?.table) {
      setLeagueList(prev => [
        ...prev,
        ...competitionData.table.slice(leagueList.length, competitionData.table.length)
      ])
    }
  }, [competitionData, leagueList.length])

  // Функция для загрузки больше данных в таблицу группы
  const loadMoreGroup = useCallback(() => {
    if (competitionData?.group) {
      setGroupList(prev => [
        ...prev,
        ...competitionData.group.slice(groupList.length, competitionData.group.length)
      ])
    }
  }, [competitionData, groupList.length])

  switch (activeBlock) {
    case 'scorers':
      return !!scorers?.length && <CompetitionScorers data={scorers} />
    case 'table':
      return (
        <>
          {competitionData?.table && (
            <CompetitionList
              data={leagueList}
              totalItems={competitionData?.table.length}
              type="league"
              onLoadMore={loadMoreLeague}
            />
          )}
          {competitionData?.group && (
            <CompetitionList
              data={groupList}
              totalItems={competitionData?.group.length}
              type="group"
              onLoadMore={loadMoreGroup}
            />
          )}
        </>
      )
    case 'calendar':
      return matches && <Calendar data={matches} />
    default:
      return null
  }
}
