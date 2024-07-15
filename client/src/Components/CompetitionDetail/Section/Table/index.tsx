import React, { FC, useEffect } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { Loader } from '@/Common/Loading';
import Link from 'next/link';
import styles from '../../CompetitionsDetail.module.scss';

export const LeagueTable: FC = () => {
  const { data, isLoading } = useAppSelector((s) => s.tournament);

  useEffect(() => {}, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.table}>
          <h1>League Table</h1>
          <ul className={styles.ul}>
            {data?.table.map((el) => (
              <li key={el.team.id}>
                {el.position}
                <Link
                  href={`/teams/${el.team.id}`}
                  as={`/teams/${el.team.id}`}
                  className={styles.team}
                >
                  {el.team.name}
                </Link>
                - {el.points} points
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
