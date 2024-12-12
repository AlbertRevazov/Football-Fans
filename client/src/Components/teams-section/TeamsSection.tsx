import React, { FC, useState } from 'react';
import { TeamsForMain } from '@/data';
import Slider from '../ui/Slider';
import styles from './team-section.module.scss';

const TeamsSection: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TeamsForMain.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TeamsForMain.length) % TeamsForMain.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {TeamsForMain.map((team) => (
          <Slider key={team.apiId} data={team} />
        ))}
      </div>
      <div className={styles.buttons}>
        <button className={styles.left} onClick={prevSlide}>
          <img src="/svg/arrow-left.svg" alt="previous" loading="lazy" />
        </button>
        <button className={styles.right} onClick={nextSlide}>
          <img src="/svg/arrow-right.svg" alt="previous" loading="lazy" />
        </button>
      </div>
    </div>
  );
};

export default TeamsSection;
