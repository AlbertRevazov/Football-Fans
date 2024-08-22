import React, { FC } from 'react';
import { ITeamSectionProps } from '@/types/Teams';
import Link from 'next/link';
import styles from './Squad.module.scss';

const SquadSection: FC<ITeamSectionProps> = ({ team }) => {
  return (
    <>
      <h2>Squad</h2>
      <div className={styles.squadRoot}>
        {!!team &&
          Object.entries(team.squad).map(([position, players]) => (
            <section className={styles.positionSection} key={position}>
              <h2>{position}</h2>
              <div className={styles.divider} />
              <ul className={styles.playerList}>
                {players.map((player) => (
                  <Link
                    href={`/persons/${player.id}`}
                    key={player.id}
                    className={styles.playerLink}
                  >
                    <li>{player.name}</li>
                  </Link>
                ))}
              </ul>
            </section>
          ))}
      </div>
    </>
  );
};

export default SquadSection;
