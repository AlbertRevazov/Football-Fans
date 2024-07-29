import React, { FC } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { Loader } from '@/Common/Loading';
import { ApiErrors } from '@/data';
import styles from './Information.module.scss';
import Link from 'next/link';

export const TeamInfo: FC = () => {
  const { team, isLoading, status } = useAppSelector((s) => s.team);

  if (isLoading) return <Loader />;

  if (status !== 200) {
    return <div className={styles.container}>Error: {ApiErrors[team?.errorCode as string]}</div>;
  }

  return (
    <section className={styles.teamInfo}>
      <h2>Information</h2>
      <ul className={styles.infoList}>
        <li>Основан в - {team?.founded}</li>
        <li>Адрес - {team?.address}</li>
        <li>Домашний стадион - {team?.venue}</li>
        <li>
          Вэб сайт -{' '}
          <a
            href={team?.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.websiteLink}
          >
            {team?.website}
          </a>
        </li>
        <li>
          Участвует в -
          {team?.runningCompetitions?.map((el) => (
            <div key={el.id} className={styles.competition}>
              {el.name}
            </div>
          ))}
        </li>
        <li>
          Главный тренер - <Link href={`/persons/${team?.coach.id}`}>{team?.coach?.name}</Link>
        </li>
      </ul>
    </section>
  );
};
