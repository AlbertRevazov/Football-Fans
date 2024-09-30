import React, { FC } from 'react';
import styles from '../Table.module.scss';

const TableHeader: FC = () => {
  return (
    <>
      <span className={styles.position}>Pos</span>
      <span className={styles.team}>Team</span>
      <span className={styles.points}>Pts</span>
      <span className={styles.games}>Games</span>
      <span className={styles.wins}>W</span>
      <span className={styles.draws}>D</span>
      <span className={styles.losses}>L</span>
      <span className={styles.goalsFor}>G</span>
      <span className={styles.goalsAgainst}>LG</span>
      <span className={styles.goalDifference}>GD</span>
    </>
  );
};

export default TableHeader;
