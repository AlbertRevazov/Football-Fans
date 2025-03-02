import React, { FC } from 'react'
import { ITeamSectionProps } from '@/types/TeamsTypes'
import Link from 'next/link'
import styles from './information.module.scss'

const InformationSection: FC<ITeamSectionProps> = ({ team }) => {
  const { address, venue, runningCompetitions, website, founded, coach } = team

  return (
    <section className={styles.info}>
      <h1 className={styles.title}>{team.name}</h1>
      <ul className={styles.list}>
        {founded && (
          <li className={styles.li}>
            Основан<span>{founded}</span>{' '}
          </li>
        )}
        {address && (
          <li className={styles.li}>
            Адрес <span>{address}</span>{' '}
          </li>
        )}
        {venue && (
          <li className={styles.li}>
            Стадион <span>{venue}</span>{' '}
          </li>
        )}
        {website && (
          <li className={styles.li}>
            Вэб сайт
            <Link href={website} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {website}
            </Link>
          </li>
        )}
        {runningCompetitions && (
          <li className={styles.competitions}>
            Участвует
            <div className={styles.item}>
              {runningCompetitions.map(competition => (
                <Link
                  key={competition.id}
                  href={`/competitions/${competition.code}`}
                  className={styles.link}>
                  {competition.name}
                </Link>
              ))}
            </div>
          </li>
        )}
        {coach?.name && (
          <li className={styles.li}>
            Тренер
            <Link href={`/persons/${coach.id}`} className={styles.link}>
              {coach.name}
            </Link>
          </li>
        )}
      </ul>
    </section>
  )
}

export default InformationSection
