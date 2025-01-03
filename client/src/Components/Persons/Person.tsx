import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getPersonById } from '@/redux/slices/Persons';
import { ApiErrors, PersonPositions } from '@/data';
import { DateFormate } from '@/utils/Date';
import Link from 'next/link';
import Loading from '@/common/loader';
import styles from './persons.module.scss';

const Persons: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { person, isLoading, status, errorCode } = useAppSelector((s) => s.player);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      await dispatch(getPersonById(id as string));
    };

    fetchData();

    return () => {
      // Очистка, если необходимо
    };
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (errorCode && status) {
    return <div className={styles.main}>Ошибка: {ApiErrors[errorCode]}</div>;
  }

  if (!person) {
    return <div className={styles.main}>Данные не найдены</div>;
  }

  const { currentTeam } = person ?? {};
  const { firstName, lastName, dateOfBirth, nationality, position, shirtNumber } = person;
  const { id: teamId, name: teamName, contract } = currentTeam ?? {};
  const birth = DateFormate(dateOfBirth as string);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>Персональная информация</h1>
        <ul className={styles.ul}>
          <li key="full-name" className={styles.li}>
            Имя
            <span>
              {firstName} {lastName}
            </span>
          </li>
          <li key="birthday" className={styles.li}>
            Родился <span>{birth.substring(0, birth.length - 8)}</span>
          </li>
          <li key="country" className={styles.li}>
            Страна <span>{nationality}</span>
          </li>
          <li key="position" className={styles.li}>
            Позиция
            <span>{PersonPositions[position as keyof typeof PersonPositions] || position}</span>
          </li>
          {shirtNumber && (
            <li key="shirt-number" className={styles.li}>
              Номер <span>{shirtNumber}</span>
            </li>
          )}
          {currentTeam?.id && (
            <li key="club" className={styles.li}>
              Клуб
              <Link className={styles.teamLink} href={`/teams/${teamId}`}>
                {teamName}
              </Link>
            </li>
          )}
          {currentTeam?.contract.until && (
            <li key="contract-until" className={styles.li}>
              Контракт до <span> {contract.until.split('-').reverse().join(' - ')}</span>
            </li>
          )}
        </ul>
      </section>
    </main>
  );
};
export default Persons;
<span></span>;
