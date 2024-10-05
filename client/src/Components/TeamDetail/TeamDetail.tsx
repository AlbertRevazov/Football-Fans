import React, { FC, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToFavorites, removeFromFavorites } from '@/redux/slices/Auth';
import { getTeamById } from '@/redux/slices/Team';
import { useRouter } from 'next/router';
import { ApiErrors } from '@/data';
import dynamic from 'next/dynamic';
import Loading from '../../Common/Loader';
import styles from './TeamsDetail.module.scss';
import Calendar from '@/Common/Calendar';

const InformationSection = dynamic(() => import('./InformationSection'));
const SquadSection = dynamic(() => import('./SquadSection'));

const TeamsDetail: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const teamId = router.query.id as string;
  const { team, isLoading, status } = useAppSelector((s) => s.team);
  const { user, liked } = useAppSelector((s) => s.auth);
  const [isFav, setIsFav] = useState(false);

  const userId = String(user?.id);

  useEffect(() => {
    if (teamId && typeof teamId === 'string') {
      dispatch(getTeamById({ id: teamId }));
    }
  }, [teamId, dispatch]);

  useEffect(() => {
    if (!!liked?.length) {
      setIsFav(liked?.some((item) => item.favoriteApiId === teamId) || false);
    }
  }, [liked, teamId]);

  const favoriteImage = useMemo(() => {
    return isFav ? '/svg/bxs-heart.svg' : '/svg/bx-heart.svg';
  }, [isFav]);

  if (isLoading) return <Loading />;

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
    <>
      {team && (
        <div className={styles.root}>
          <div className={styles.container}>
            <header className={styles.header}>
              <InformationSection team={team} />
              <article className={styles.teamLogo}>
                <h1>{team?.shortName}</h1>
                <img
                  className={styles.teamEmblem}
                  loading="lazy"
                  src={team?.crest}
                  alt="team emblem"
                />
                {!!user?.id && (
                  <div onClick={handleFavoriteToggle}>
                    <img src={favoriteImage} alt="heart" loading="lazy" />
                  </div>
                )}
              </article>
            </header>
            <main className={styles.mainContent}>
              <SquadSection team={team} />
              <section className={styles.matches}>
                <Calendar data={team.calendar} />
              </section>
            </main>
          </div>
        </div>
      )}
    </>
  );
};
export default TeamsDetail;
