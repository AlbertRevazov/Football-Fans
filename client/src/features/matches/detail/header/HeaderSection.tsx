import React, { FC } from 'react'
import { IGames } from '@/types/GamesTypes'
import { MatchStages } from '@/shared/data'
import { DateFormate } from '@/shared/utils/Date'
import Link from 'next/link'
import styles from './header-section.module.scss'

interface IHeaderProps {
  data: IGames
}

const HeaderSection: FC<IHeaderProps> = ({ data }) => {
  const { awayTeam, homeTeam, competition, score } = data
  return (
    <main className={styles.headerRoot}>
      <section className={styles.competitionInfo}>
        <h1 className={styles.title}>{competition.name}</h1>
        <p className={styles.matchDay}>
          ТУР {data.matchday}
          <span className={styles.status}>
            {MatchStages[data.stage as keyof typeof MatchStages]}
          </span>
        </p>
        <time className={styles.date} dateTime={data.utcDate}>
          {DateFormate(data.utcDate)}
        </time>
      </section>

      <section className={styles.teamsWrapper}>
        <div className={`${styles.team} ${styles.homeTeam}`}>
          <figure className={`${styles.figure} ${styles.homeTeam}`}>
            <img
              className={styles.img}
              src={homeTeam.crest}
              alt="home team emblem"
              loading="lazy"
            />
          </figure>
          <Link className={styles.teamName} href={`/teams/${homeTeam.id}`}>
            {homeTeam.shortName}
          </Link>
        </div>
        <h3 className={styles.score}>
          {score.fullTime.home || 0} - {score.fullTime.away || 0}
        </h3>
        <div className={styles.team}>
          <figure className={styles.figure}>
            <img
              className={styles.img}
              src={awayTeam.crest}
              alt="away team emblem"
              loading="lazy"
            />
          </figure>
          <Link className={styles.teamName} href={`/teams/${awayTeam.id}`}>
            {awayTeam.shortName}
          </Link>
        </div>
      </section>

      {data.venue && <p>Stadium - {data.venue}</p>}
      {data.referees[0]?.id && (
        <p className={styles.ref}>
          Referee - {data.referees[0]?.name} ({data.referees[0]?.nationality})
        </p>
      )}
    </main>
  )
}
export default HeaderSection
