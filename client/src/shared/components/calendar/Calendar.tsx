import React, { FC, useState } from 'react'
import { IGames } from '@/types/GamesTypes'
import { MatchStatuses } from '@/shared/data'
import { DateFormate } from '@/shared/utils/Date'
import Link from 'next/link'
import styles from './calendar.module.scss'
import Card from '../card'

interface ICalendarProps {
  data: IGames[]
}

const Calendar: FC<ICalendarProps> = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState<number>(12)
  const list = data.slice(0, visibleCount)

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 12)
  }

  return (
    <section className={styles.calendar}>
      {list.map(match => (
        <Link key={match.id} className={styles.teams} href={`/matches/${match.id}`}>
          <Card type='match' data={match} />
          <p className={styles.status}>
            {MatchStatuses[match.status as keyof typeof MatchStatuses]}
          </p>
          <p className={styles.date}>{DateFormate(match.utcDate, true)}</p>
          {match.matchday}
        </Link>
      ))}
      {visibleCount < data.length && (
        <div className={styles.loadBtn} onClick={loadMore}>
          Load More
        </div>
      )}
    </section>
  )
}

export default Calendar
