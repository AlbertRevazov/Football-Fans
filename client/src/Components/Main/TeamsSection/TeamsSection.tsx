import React, { FC, useState } from 'react';
import { TeamsForMain } from '@/data';
import Slider from '@/components/Main/TeamsSection/Slider/Slider';
import styles from './TeamsSection.module.scss';

const TeamsSection: FC = () => {
  const [currentIndex] = useState(0);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {TeamsForMain.map((team) => (
          <Slider data={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamsSection;
