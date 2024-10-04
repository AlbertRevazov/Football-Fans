import React, { FC } from 'react';
import { ITeamSectionProps } from '@/types/Teams';
import Link from 'next/link';
import CLink from '@/Common/Link';
import styles from './Information.module.scss';

const InformationSection: FC<ITeamSectionProps> = ({ team }) => {
  const { address, venue, runningCompetitions, website, founded, coach } = team;

  return (
    <section className={styles.teamInfo}>
      <h2>Information</h2>
      <ul className={styles.infoList}>
        {founded && <li>Основан в - {founded}</li>}
        {address && <li>Адрес - {address}</li>}
        {venue && <li>Домашний стадион - {venue}</li>}
        {website && (
          <li>
            Вэб сайт -
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.websiteLink}
            >
              {website}
            </a>
          </li>
        )}
        {runningCompetitions && (
          <li className={styles.runningCompetition}>
            Участвует в -
            {runningCompetitions.map((competition, index) => (
              <span key={competition.id} className={styles.competition}>
                <h5>
                  <CLink link={`/competitions/${competition.code}`}>{competition.name}</CLink>{' '}
                  {index < runningCompetitions.length - 1 ? ', ' : ''}
                </h5>
              </span>
            ))}
          </li>
        )}
        {coach?.name && (
          <li>
            Главный тренер - <Link href={`/persons/${coach.id}`}>{coach.name}</Link>
          </li>
        )}
      </ul>
    </section>
  );
};

export default InformationSection;
