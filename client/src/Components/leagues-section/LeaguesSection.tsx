import React, { useState, useEffect, useRef } from 'react';
import { Leagues } from '@/data';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import styles from './leagues-section.module.scss';

const LeaguesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const directionRef = useRef(1);

  useEffect(() => {
    if (Leagues.length <= 1) return;
    const interval = setInterval(() => {
      let nextIndex = activeIndex + directionRef.current;
      if (nextIndex < 0 || nextIndex >= Leagues.length) {
        directionRef.current *= -1;
        nextIndex = activeIndex + directionRef.current;
      }
      setActiveIndex(nextIndex);
    }, 20000);

    return () => clearInterval(interval);
  }, [Leagues.length, activeIndex]);

  const changeActiveItem: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setActiveIndex(+event.currentTarget.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.subtitle}>
          <Link href="/competitions">Kick Off</Link>
        </p>
        <h2 className={styles.title}>Top Leagues</h2>
      </div>
      <div className={styles.leaguesList}>
        {Leagues.map((league, index) => (
          <div
            onClick={changeActiveItem}
            key={league.id}
            id={`${index}`}
            className={`${index === activeIndex ? styles.active : styles.inactive}`}
          >
            <Card
              data={league}
              link={`/competitions/${league.apiId}`}
              key={league.id}
              isActive={index === activeIndex ? true : false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaguesSection;
