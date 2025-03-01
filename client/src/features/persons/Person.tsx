import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getMatchesByPersonId, getPersonById } from '@/redux/slices/Persons';
import { ApiErrors, listKeys } from '@/shared/data';
import { DateFormate } from '@/shared/utils/Date';
import Results from './Results';
import ListItem from '@/shared/components/listItem/ListItem';
import Loading from '@/shared/components/loader';
import styles from './persons.module.scss';

const Persons: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { person, isLoading, status, personMatches, errorCode } = useAppSelector((s) => s.player);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      await dispatch(getPersonById(id as string));
      await dispatch(getMatchesByPersonId(id as string));
    };

    fetchData();
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
  const { id: teamId, shortName } = currentTeam ?? {};
  const birth = DateFormate(dateOfBirth as string);

  const data = {
    fullName: {
      first: firstName,
      last: lastName,
    },
    team: {
      id: teamId,
      name: shortName,
    },
    birth: birth.substring(0, birth.length - 10),
    nationality,
    position,
    contract: currentTeam.contract.until,
    cn: styles.teamLink,
    playedMatches: personMatches,
    shirtNumber,
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>Personal Information</h1>
        <ul className={styles.ul}>
          {listKeys.map((key) => (
            <ListItem key={key} type={key} data={data} />
          ))}
        </ul>
        {personMatches && <Results data={personMatches} />}
      </section>
    </main>
  );
};
export default Persons;
