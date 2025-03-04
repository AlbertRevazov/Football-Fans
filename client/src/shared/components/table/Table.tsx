import React, { FC } from 'react'
import { Standings, Table } from '@/types/CompetitionsTypes'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import styles from './table.module.scss'

interface ICustomTableProps<T> {
  data: T[]
  type: 'league' | 'group'
}

const CustomTable = <T,>({ data, type }: ICustomTableProps<T>) => {
  return type === 'group' ? (
    <section className={styles.groupSection}>
      {(data as Standings[]).map(basket => (
        <ul className={styles.list} key={basket.group}>
          <p className={styles.groupName}>{basket.group}</p>
          <li className={styles.header}>
            <TableHeader />
          </li>
          {basket.table.map(team => (
            <TableRow key={team.team.id} el={team} />
          ))}
        </ul>
      ))}
    </section>
  ) : (
    <ul className={styles.list}>
      <li className={styles.header}>
        <TableHeader />
      </li>
      {(data as Table[]).map(team => (
        <TableRow key={team.team.id} el={team} />
      ))}
    </ul>
  )
}

export default CustomTable
