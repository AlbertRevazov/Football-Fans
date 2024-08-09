import React, { FC } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { ApiErrors } from '@/data';
import Loading from '@/common/Loading/Loading';
import Link from 'next/link';
import styles from './Squad.module.scss';

const SquadSection: FC = () => {
  const { isLoading, team, status } = useAppSelector((s) => s.team);

  if (isLoading) return <Loading />;

  if (status !== 200) {
    return (
      <div className={styles.container}>
        Error: {ApiErrors[team?.errorCode as string]}
        {team?.errorCode}
      </div>
    );
  }

  return (
    <div className={styles.squadRoot}>
      {!!team &&
        Object.entries(team.squad).map(([position, players]) => (
          <section key={position} className={styles.positionSection}>
            <h2>{position}</h2>
            <div className={styles.divider} />
            <ul className={styles.playerList}>
              {players.map((player) => (
                <Link href={`/persons/${player.id}`} key={player.id} className={styles.playerLink}>
                  <li>{player.name}</li>
                </Link>
              ))}
            </ul>
          </section>
        ))}
    </div>
  );
};

export default SquadSection;
