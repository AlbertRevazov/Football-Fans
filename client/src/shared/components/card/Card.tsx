import React, { FC } from 'react'
import FeatureCard from './featureCard'
import MatchesCard from './matchesCard'
import { IGames } from '@/types/GamesTypes'
import { FeatureType } from './featureCard/FeatureCard'

interface ICardProps {
  type: 'feature' | 'match'
  data: FeatureType | IGames
}

const Card: FC<ICardProps> = ({ type, data }) => {
  return (
    <>
      {type === 'feature' ? (
        <FeatureCard feature={data as FeatureType} />
      ) : (
        <MatchesCard match={data as IGames} />
      )}
    </>
  )
}

export default Card
