import React, { FC } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { Loader } from '@/Common/Loading';
import styles from './Squad.module.scss';
import Link from 'next/link';

export const Squad: FC = () => {
  const { isLoading, team } = useAppSelector((s) => s.team);

  return (
    <div>
      {isLoading || !team?.id ? (
        <Loader />
      ) : (
        <div className={styles.squad_root}>
          {!!team &&
            Object.entries(team.squad).map(([position, players]) => (
              <div key={position} className={styles.player}>
                <h2>{position}</h2>
                <div className={styles.divider} />
                <ul>
                  {players.map((player, index) => (
                    <Link href={`/persons/${player.id}`} className={styles.link}>
                      <li key={index}>{player.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
