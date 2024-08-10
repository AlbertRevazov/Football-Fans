import React, { FC } from 'react';
import styles from './Main.module.scss';
import WelcomeSection from './WelcomeSection';

const Main: FC = () => {
  return (
    <div className={styles.root}>
      <WelcomeSection />
    </div>
  );
};
export default Main;
