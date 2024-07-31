import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getFavoritesList } from '@/redux/Slices/Favorites';
import { Loader } from '@/Common/Loading';
import styles from './Favorites.module.scss';

export const Favorites: FC = () => {
  const { user } = useAppSelector((s) => s.auth);
  const { data, isLoading, status, errorCode } = useAppSelector((s) => s.liked);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user?.id) dispatch(getFavoritesList(String(user.id)));
  }, []);

  if (isLoading) return <Loader />;

  if (errorCode !== 200) return <div className={styles.main}>{status}</div>;

  if (!data) return <div className={styles.main}>Something went wrong</div>;

  return (
    <div className={styles.main}>
      {!!data.length
        ? data.map((team) => (
            <ul>
              <li>{team.name}</li>
              <li>
                <img src={team.crest} alt="team logo" loading="lazy" />
              </li>
            </ul>
          ))
        : 'Тут пока ничего нет'}
    </div>
  );
};
