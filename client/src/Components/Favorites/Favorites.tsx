import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { removeFromFavorites } from '@/redux/slices/Auth';
import Loading from '@/common/Loading/Loading';
import styles from './Favorites.module.scss';
import Link from 'next/link';

const Favorites: FC = () => {
  const dispatch = useAppDispatch();
  const { liked, isLoading, user } = useAppSelector((s) => s.auth);
  const userId = String(user?.id);

  if (isLoading) return <Loading />;

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
              <Link className={styles.links} href={`/teams/${team.favoriteApiId}`}>
                <li className={styles.team_name}>{team.name}</li>
                <li>
                  <img
                    className={styles.team_pic}
                    src={team.crest}
                    alt="team logo"
                    loading="lazy"
                  />
                </li>
              </Link>
              <img
                className={styles.remove}
                src={'/svg/bxs-heart.svg'}
                onClick={() => handleRemoveFromFavorites(team.favoriteApiId, team.name, team.crest)}
              />
            </ul>
          ))
        : 'Тут пока ничего нет'}
    </div>
  );
};
export default Favorites;
