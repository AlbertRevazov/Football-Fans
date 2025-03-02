import React, { FC } from 'react'
import WelcomeSection from './welcome'
import FeaturesSection from './features'
import DreamsSection from './dreams'
import LeaguesSection from './leagues'
import WriteSection from './write'
import styles from './main.module.scss'

const Main: FC = () => {
  return (
    <div className={styles.root}>
      <WelcomeSection />
      <FeaturesSection />
      <DreamsSection />
      <LeaguesSection />
      <WriteSection />
    </div>
  )
}
export default Main
