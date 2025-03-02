import React, { FC } from 'react'
import { Features } from '@/shared/data'
import styles from './feature-section.module.scss'
import Card from '@/shared/components/card'

const FeaturesSection: FC = () => {
  return (
    <section className={styles.features}>
      {Features.map(feat => (
        <Card type="feature" data={feat} key={feat.id} />
      ))}
    </section>
  )
}

export default FeaturesSection
