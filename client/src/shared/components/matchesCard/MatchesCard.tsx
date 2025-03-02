import React, { FC } from 'react'
import { useIsWideScreen } from '@/shared/utils/useIsWideScreen'
import { IGames } from '@/types/GamesTypes'
import styles from './matches-card.module.scss'

interface IMatchesCardProps {
  match: IGames
}

const MatchCard: FC<IMatchesCardProps> = ({ match }) => {
  const { awayTeam, homeTeam, score } = match
  const isWide = useIsWideScreen()
  const isFinished = match.status === 'FINISHED'
  const isCorrectScore = (n: number | null) => (n === null ? '' : n)
  return (
    <>
      <article className={styles.homeTeam}>
        <figure className={styles.figure}>
          <img className={styles.img} src={homeTeam.crest} alt={'team emblem'} loading="lazy" />
        </figure>
        <div className={styles.homeLink}>
          <p className={styles.homeTeamName}>{homeTeam.shortName}</p>
          <h5 className={isFinished ? styles.score : styles.disable}>
            {isCorrectScore(score.fullTime.home)}
          </h5>
        </div>
      </article>
      {isWide ? '-' : null}
      <article className={styles.awayTeam}>
        <figure className={styles.figure}>
          <img className={styles.img} src={awayTeam.crest} alt={'team emblem'} loading="lazy" />
        </figure>
        <div className={styles.awayLink}>
          <h5 className={isFinished ? styles.score : styles.disable}>
            {isCorrectScore(score.fullTime.away)}
          </h5>
          <p className={styles.awayTeamName}>{awayTeam.shortName}</p>
        </div>
      </article>
    </>
  )
}
export default MatchCard
