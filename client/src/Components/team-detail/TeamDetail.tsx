import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToFavorites, removeFromFavorites } from '@/redux/slices/Auth';
import { getTeamById } from '@/redux/slices/Team';
import { useRouter } from 'next/router';
import { ApiErrors } from '@/data';
import dynamic from 'next/dynamic';
import Loading from '@/components/ui/Loader';
import Calendar from '@/components/ui/Calendar';
import styles from './teams-detail.module.scss';

const InformationSection = dynamic(() => import('./InformationSection'));
const SquadSection = dynamic(() => import('./SquadSection'));

const TeamsDetail: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const teamId = router.query.id as string;
  const { team, isLoading, status } = useAppSelector((s) => s.team);
  const { user, liked } = useAppSelector((s) => s.auth);
  const [isFav, setIsFav] = useState(false);
  const [toggleSection, setToggleSection] = useState<boolean>(false);

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

  if (isLoading) return <Loading />;

  if (status !== 200) {
    return (
      <div className={styles.container}>
        Error: {ApiErrors[team?.errorCode as string]}
        {team?.errorCode}
      </div>
    );
  }

  const handleFavoriteToggle: React.MouseEventHandler<HTMLParagraphElement> = (e) => {
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
              <article className={styles.logo}>
                <img className={styles.emblem} loading="lazy" src={team?.crest} alt="team emblem" />
                {!!user?.id && (
                  <p
                    className={styles[isFav ? 'liked' : 'notLiked']}
                    onClick={handleFavoriteToggle}
                  >
                    {isFav ? 'Remove' : 'Add'}
                  </p>
                )}
              </article>
            </header>
            <div className={styles.toggle_section} onClick={() => setToggleSection(!toggleSection)}>
              {toggleSection ? 'Calendar' : 'Squad'}
            </div>
            <main className={styles.mainContent}>
              {toggleSection ? <Calendar data={team.calendar} /> : <SquadSection team={team} />}
            </main>
          </div>
        </div>
      )}
    </>
  );
};
export default TeamsDetail;
