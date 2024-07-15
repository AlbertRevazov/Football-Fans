import React, { FC } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { Loader } from '@/Common/Loading';
import styles from './Squad.module.scss';

export const Squad: FC = () => {
  const { isLoading, team } = useAppSelector((s) => s.team);

  return (
    <div>
      {isLoading || !team ? (
        <Loader />
      ) : (
        <>
          {!!team &&
            Object.entries(team.squad).map(([position, players]) => (
              <div key={position}>
                <h2>{position}</h2>
                <ul>
                  {players.map((player, index) => (
                    <li key={index}>{player.name}</li>
                  ))}
                </ul>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
