import React, { FC } from 'react';
import WelcomeSection from './WelcomeSection';
import FeaturesSection from './FeaturesSection';

import styles from './Main.module.scss';

const Main: FC = () => {
  return (
    <div className={styles.root}>
      <WelcomeSection />
      <FeaturesSection />
    </div>
  );
};
export default Main;
