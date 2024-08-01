import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getTeamById } from '@/redux/Slices/Team';
import { Squad } from './Section/Squad';
import { TeamInfo } from './Section/Information';
import { Loader } from '@/Common/Loading';
import { ApiErrors } from '@/data';
import { addToFavorites, removeFromFavorites } from '@/redux/Slices/Favorites';
import styles from './TeamsDetail.module.scss';

export const TeamsDetail: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const teamId = router.query.id as string;
  const { team, isLoading, status } = useAppSelector((s) => s.team);
  const { user } = useAppSelector((s) => s.auth);
  const [isFavorite, setIsFavorite] = useState(team?.isFavorite || false);
  const userId = String(user?.id);

  useEffect(() => {
    if (teamId && user?.id) {
      dispatch(getTeamById({ userId, id: teamId })).then(() => {
        setIsFavorite(team?.isFavorite || false);
      });
    }
  }, [dispatch, user?.id, teamId]);

  if (isLoading) return <Loader />;

  if (status !== 200) {
    return <div className={styles.container}>Error: {ApiErrors[team?.errorCode as string]}</div>;
  }

  const handleFavoriteToggle: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const action = isFavorite ? removeFromFavorites : addToFavorites;

    if (team && user?.id && teamId) {
      dispatch(
        action({
          userId,
          favorite: { id: teamId, name: team.shortName, crest: team.crest },
        })
      ).then(() => {
        setIsFavorite(!isFavorite);
      });
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{team?.name}</h1>
          <img loading="lazy" src={team?.crest} alt="team emblem" className={styles.emblem} />
          <div onClick={handleFavoriteToggle} style={{ cursor: 'pointer' }}>
            <img
              src={isFavorite ? '/svg/bxs-heart.svg' : '/svg/bx-heart.svg'}
              alt="heart"
              loading="lazy"
            />
          </div>
        </header>
        <main className={styles.mainContent}>
          <TeamInfo />
          <Squad />
        </main>
      </div>
    </div>
  );
};
