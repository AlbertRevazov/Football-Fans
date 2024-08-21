import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { MatchStatuses } from '@/data';
import { getMatchesList } from '@/redux/slices/Games';
import { useIsWideScreen } from '@/utils/useIsWideScreen';
import Loading from '@/common/Loading/Loading';
import Error from '@/common/Error';
import Link from 'next/link';
import styles from './Matches.module.scss';
import MatchesCard from './MatchesCard';

const MatchSection: FC = () => {
  const [expandedCompetitions, setExpandedCompetitions] = useState<string[]>([]);
  const { games, isLoading, errorCode } = useAppSelector((s) => s.matches);
  const isWide = useIsWideScreen();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMatchesList());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (errorCode) {
    return <Error code={errorCode} />;
  }

  const toggleCompetition = (competition: string) => {
    setExpandedCompetitions((prev) =>
      prev.includes(competition)
        ? prev.filter((comp) => comp !== competition)
        : [...prev, competition]
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>{Object.keys(games || {}).length ? 'Ближайшие матчи' : 'Матчей не найдено'}</h2>
        {games &&
          Object.keys(games).map((competition) => {
            const isExpanded = expandedCompetitions.includes(competition);
            const icon = isExpanded ? '/svg/arrow-up.svg' : '/svg/arrow-down.svg';
            return (
              <article key={competition} className={styles.competition}>
                <header
                  className={`${styles.header} ${!isExpanded && styles.close}`}
                  onClick={() => toggleCompetition(competition)}
                >
                  {competition}
                  <img className={styles.icon} src={icon} alt="icon" loading="lazy" />
                </header>
                <div
                  className={`${styles.matchesContainer} ${
                    isExpanded ? styles.visible : styles.hidden
                  }`}
                >
                  {isExpanded &&
                    games[competition].map((match) => (
                      <Link key={match.id} className={styles.card} href={`/matches/${match.id}`}>
                        <div className={styles.teams}>
                          <MatchesCard match={match} isAway={false} />
                          {!isWide ? '' : '-'}
                          <MatchesCard match={match} isAway={true} />
                        </div>
                        <div className={styles.status}>
                          {MatchStatuses[match.status as keyof typeof MatchStatuses]}
                        </div>
                      </Link>
                    ))}
                </div>
              </article>
            );
          })}
      </div>
      <footer className={styles.note}>
        * Не всегда корректно отображается день игры из-за часовых поясов
      </footer>
    </section>
  );
};

export default MatchSection;
