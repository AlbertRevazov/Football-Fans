import React, { FC } from 'react'
import Link from 'next/link'
import styles from './slider.module.scss'

interface ISliderProps {
  data: {
    id: number
    crest: string
    title: string
    apiId: string
    trophies: { league: number; cup: number; Ucl: number }
  }
}

const Slider: FC<ISliderProps> = ({ data }) => {
  return (
    <div key={data.apiId} className={styles.slide}>
      <div className={styles.content}>
        <img className={styles.crest} src={data.crest} alt={data.title} loading="lazy" />{' '}
        <Link href={`/teams/${data.apiId}`} className={styles.link}>
          <h3>{data.title}</h3>{' '}
        </Link>
        <ul className={styles.trophiesList}>
          <li className={styles.trophy}>
            <p>National League</p> {data.trophies.league}
          </li>
          <li className={styles.trophy}>
            <p>National Cup</p> {data.trophies.cup}
          </li>
          <li className={styles.trophy}>
            <p>Champions League</p> {data.trophies.Ucl}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Slider
