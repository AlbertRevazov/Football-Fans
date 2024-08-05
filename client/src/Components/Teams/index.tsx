import React, { FC, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getTeamById } from '@/redux/slices/Team';
import { Squad } from './Section/Squad';
import { TeamInfo } from './Section/Information';
import { Loader } from '@/common/Loading';
import { ApiErrors } from '@/data';
import { addToFavorites, removeFromFavorites } from '@/redux/slices/Auth';
import styles from './TeamsDetail.module.scss';

export const TeamsDetail: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const teamId = router.query.id as string;
  const { team, isLoading, status } = useAppSelector((s) => s.team);
  const { user, liked } = useAppSelector((s) => s.auth);
  const [isFav, setIsFav] = useState(false);

  const userId = String(user?.id);

  useEffect(() => {
    if (teamId && user?.id) {
      dispatch(getTeamById({ userId, id: teamId }));
    }
  }, [teamId, user?.id, dispatch]);

  useEffect(() => {
    if (!!liked?.length) {
      setIsFav(liked?.some((item) => item.favoriteApiId === teamId) || false);
    }
  }, [liked, teamId]);

  const favoriteImage = useMemo(() => {
    return isFav ? '/svg/bxs-heart.svg' : '/svg/bx-heart.svg';
  }, [isFav]);

  if (isLoading) return <Loader />;

  if (status !== 200) {
    return (
      <div className={styles.container}>
        Error: {ApiErrors[team?.errorCode as string]}
        {team?.errorCode}
      </div>
    );
  }

  const handleFavoriteToggle: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const action = isFav ? removeFromFavorites : addToFavorites;

    if (team && user?.id && teamId) {
      dispatch(
        action({
          userId,
          favorite: { id: teamId, name: team.shortName, crest: team.crest },
        })
      );
      setIsFav(!isFav);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{team?.name}</h1>
          <img loading="lazy" src={team?.crest} alt="team emblem" className={styles.emblem} />
          <div onClick={handleFavoriteToggle} style={{ cursor: 'pointer' }}>
            <img src={favoriteImage} alt="heart" loading="lazy" />
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
