import React, { FC } from 'react';
import { Standings, Table } from '@/types/CompetitionsTypes';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import styles from './table.module.scss';

interface ICustomTableProps {
  group?: Standings[];
  list?: Table[];
}

const CustomTable: FC<ICustomTableProps> = ({ group, list }) => {
  return group ? (
    <section className={styles.groupSection}>
      {group.map((basket) => (
        <ul className={styles.list}>
          <p className={styles.groupName}>{basket.group}</p>
          <li className={styles.header}>
            <TableHeader />
          </li>
          {basket.table.map((team) => (
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
      {list?.map((team) => (
        <TableRow key={team.team.id} el={team} />
      ))}
    </ul>
  );
};

export default CustomTable;
