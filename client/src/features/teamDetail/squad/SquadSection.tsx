import React, { FC } from 'react'
import { ITeamSectionProps } from '@/types/TeamsTypes'
import Link from 'next/link'
import styles from './squad.module.scss'

const SquadSection: FC<ITeamSectionProps> = ({ team }) => {
  return (
    <>
      <div className={styles.squadRoot}>
        {!!team &&
          Object.entries(team.squad).map(([position, players]) => (
            <section className={styles.positionSection} key={position}>
              <h2 className={styles.positionTitle}>{position}</h2>
              <div className={styles.divider} />
              <ul className={styles.playerList}>
                {players.map(player => (
                  <Link
                    href={`/persons/${player.id}`}
                    key={player.id}
                    className={styles.playerLink}>
                    <li className={styles.player}>{player.name}</li>
                  </Link>
                ))}
              </ul>
            </section>
          ))}
      </div>
    </>
  )
}

export default SquadSection
