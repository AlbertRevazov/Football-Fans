import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { removeFromFavorites } from '@/redux/slices/Auth';
import Link from 'next/link';
import Loading from '@/shared/components/loader';
import styles from './favorites.module.scss';

const Favorites: FC = () => {
  const dispatch = useAppDispatch();
  const { liked, isLoading, user } = useAppSelector((s) => s.auth);
  const userId = String(user?.id);

  if (isLoading) return <Loading />;
  if (!user) return <div className={styles.main}>First you need to register</div>;
  if (!liked) return <div className={styles.main}>Something went wrong</div>;

  const handleRemoveFromFavorites = (teamId: string, teamName: string, teamCrest: string) => {
    dispatch(
      removeFromFavorites({
        userId,
        favorite: { id: teamId, name: teamName, crest: teamCrest },
      })
    );
  };

  return (
    <div className={styles.main}>
      {!!liked.length
        ? liked.map((team) => (
            <ul className={styles.list} key={team.favoriteApiId}>
              <Link className={styles.link} href={`/teams/${team.favoriteApiId}`}>
                <li className={styles.title}>{team.name}</li>
                <li>
                  <img className={styles.emblem} src={team.crest} alt="team logo" loading="lazy" />
                </li>
              </Link>
              <img
                className={styles.remove}
                src={'/svg/trash.svg'}
                onClick={() => handleRemoveFromFavorites(team.favoriteApiId, team.name, team.crest)}
              />
            </ul>
          ))
        : 'Тут пока ничего нет'}
    </div>
  );
};
export default Favorites;
