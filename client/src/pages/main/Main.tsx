import React, { FC } from 'react';
import WelcomeSection from '@/components/welcome-section';
import FeaturesSection from '@/components/features-section';
import LeaguesSection from '@/components/leagues-section/LeaguesSection';
import DreamsSection from '@/components/dreams-section';
import TeamsSection from '@/components/teams-section';
import WriteSection from '@/components/write-section';
import styles from './main.module.scss';

const Main: FC = () => {
  return (
    <div className={styles.root}>
      <WelcomeSection />
      <FeaturesSection />
      <LeaguesSection />
      <DreamsSection />
      <TeamsSection />
      <WriteSection />
    </div>
  );
};
export default Main;
