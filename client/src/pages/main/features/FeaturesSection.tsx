import React, { FC } from 'react'
import { Features } from '@/shared/data'
import FeatureCard from '@/shared/components/featureCard'
import styles from './feature-section.module.scss'

const FeaturesSection: FC = () => {
  return (
    <section className={styles.features}>
      {Features.map(feat => (
        <FeatureCard feature={feat} key={feat.id} />
      ))}
    </section>
  )
}

export default FeaturesSection
