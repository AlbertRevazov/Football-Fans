import React, { FC } from 'react';
import WelcomeSection from './WelcomeSection';
import FeaturesSection from './FeaturesSection';
import LeaguesSection from './LeaguesSection/LeaguesSection';
import DreamsSection from './DreamsSection';

import styles from './Main.module.scss';

const Main: FC = () => {
  return (
    <div className={styles.root}>
      <WelcomeSection />
      <FeaturesSection />
      <LeaguesSection />
      <DreamsSection />
    </div>
  );
};
export default Main;
