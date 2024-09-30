import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getPersonById } from '@/redux/slices/Persons';
import { ApiErrors, PersonPositions } from '@/data';
import { DateFormate } from '@/utils/Date';
import Loading from '@/Common/Loader';
import Link from 'next/link';
import styles from './Persons.module.scss';

const Persons: FC = () => {
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
    return <Loading />;
  }

  if (errorCode && status) {
    return <div className={styles.main}>Ошибка: {ApiErrors[errorCode]}</div>;
  }

  const { currentTeam } = person ?? {};

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h2 className={styles.title}>Персональная информация</h2>
        <ul className={styles.ul}>
          <li key="full-name">
            Имя - {person?.firstName} {person?.lastName}
          </li>
          <li key="birthday">Дата Рождения - {DateFormate(person?.dateOfBirth as string, true)}</li>
          <li key="country">Страна - {person?.nationality}</li>
          <li key="position">
            Позиция -{' '}
            {PersonPositions[person?.position as keyof typeof PersonPositions] || person?.position}
          </li>
          {person?.shirtNumber && (
            <li key="shirt-number">Номер на футболке - {person.shirtNumber}</li>
          )}
          {currentTeam?.id && (
            <li key="club">
              <Link href={`/teams/${currentTeam.id}`}>Клуб - {currentTeam.name} </Link>
            </li>
          )}
          {currentTeam?.contract.until && (
            <li key="contract-until">Контракт истекает - {currentTeam.contract.until}</li>
          )}
        </ul>
      </section>
    </main>
  );
};
export default Persons;
