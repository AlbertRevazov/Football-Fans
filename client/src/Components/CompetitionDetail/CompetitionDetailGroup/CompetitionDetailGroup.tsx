import React, { FC } from 'react';
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import styles from './GroupTable.module.scss';

const CompetitionDetailGroup: FC = () => {
  const { data } = useAppSelector((s) => s.tournament);

  return (
    <section className={styles.table}>
      <h1>League Table</h1>
      <ul className={styles.groupList}>
        {data?.group?.map((basket) => (
          <div key={basket.group} className={styles.groupSection}>
            <p className={styles.groupName}>{basket.group}</p>
            <ul className={styles.teamList}>
              {basket.table.map((team) => (
                <li key={team.team.id} className={styles.teamItem}>
                  {team.position}
                  <Link
                    className={styles.teamLink}
                    href={`/teams/${team.team.id}`}
                    as={`/teams/${team.team.id}`}
                  >
                    {team.team.name}
                  </Link>
                  - {team.points} points
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </section>
  );
};
export default CompetitionDetailGroup;
