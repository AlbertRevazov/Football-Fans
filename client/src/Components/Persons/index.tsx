import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getPersonById } from '@/redux/slices/Persons';
import { ApiErrors, PersonPositions } from '@/data';
import { DateFormate } from '@/utils/Date';
import { Loader } from '@/common/Loading';
import Link from 'next/link';
import styles from './Persons.module.scss';

export const Persons: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { person, isLoading, status, errorCode } = useAppSelector((s) => s.player);

  useEffect(() => {
    if (id) {
      dispatch(getPersonById(id as string));
    }
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (errorCode && status) {
    return <div className={styles.main}>Ошибка: {ApiErrors[errorCode]}</div>;
  }

  const { currentTeam } = person ?? {};

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h2>Персональная информация</h2>
        <ul>
          <li key="full-name">
            Full Name - {person?.firstName} {person?.lastName}
          </li>
          <li key="birthday">BirthDay - {DateFormate(person?.dateOfBirth as string, true)}</li>
          <li key="country">Country - {person?.nationality}</li>
        </ul>
        <ul>
          <li key="position">
            Position -{' '}
            {PersonPositions[person?.position as keyof typeof PersonPositions] || person?.position}
          </li>
          {person?.shirtNumber && <li key="shirt-number">Shirt Number - {person.shirtNumber}</li>}
        </ul>
        <ul>
          <li key="club">
            <Link href={`/teams/${currentTeam?.id}`}>Club - {currentTeam?.name} </Link>
          </li>
          <li key="contract-until">Contract until - {currentTeam?.contract.until}</li>
        </ul>
      </section>
      <section>
        <img src="/img/avatar.jpg" alt="player img" loading="lazy" className={styles.img} />
      </section>
    </main>
  );
};
