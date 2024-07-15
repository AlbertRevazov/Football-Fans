import React, { FC } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { Loader } from '@/Common/Loading';
import Link from 'next/link';
import styles from '../../CompetitionsDetail.module.scss';

export const GroupTable: FC = () => {
  const { data, isLoading } = useAppSelector((s) => s.tournament);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.table}>
          <h1>League Table</h1>
          <ul className={styles.ul}>
            {data?.group?.map((basket) => (
              <p key={basket.group}>
                {basket.group}
                {basket.table.map((team) => (
                  <li key={team.team.id}>
                    {team.position}
                    <Link
                      className={styles.team}
                      href={`/teams/${team.team.id}`}
                      as={`/teams/${team.team.id}`}
                    >
                      {team.team.name}
                    </Link>
                    - {team.points} points
                  </li>
                ))}
              </p>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
