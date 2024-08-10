import React, { FC } from 'react';
import WelcomeSection from './WelcomeSection';
import FeaturesSection from './FeaturesSection';
import LeaguesSection from './LeaguesSection/LeaguesSection';

import styles from './Main.module.scss';

const Main: FC = () => {
  return (
    <div className={styles.root}>
      <WelcomeSection />
      <FeaturesSection />
      <LeaguesSection />
    </div>
  );
};
export default Main;
