import React, { FC } from 'react';
import TableHeader from './TableHeaderSection/TableHeader';
import { Standings, Table } from '@/types/Competitions';
import TableRow from './TableRowSection/TableRow';
import styles from './Table.module.scss';

interface ICTableProps {
  group?: Standings[];
  list?: Table[];
}

const CTable: FC<ICTableProps> = ({ group, list }) => {
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

export default CTable;
