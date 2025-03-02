import React, { FC } from 'react'
import styles from './feature-card.module.scss'

export type FeatureType = {
  id: number
  title: string
  description: string
  icon: string
}

interface IFeatureCardProps {
  feature: FeatureType
}

const FeatureCard: FC<IFeatureCardProps> = ({ feature }) => {
  return (
    <div className={styles.featureCardContainer}>
      <article className={styles.feature}>
        <h3 className={styles.title}>{feature.title}</h3>
      </article>
      <article className={styles.featureBack}>
        <p className={styles.description}>{feature.description}</p>
      </article>
    </div>
  )
}

export default FeatureCard
