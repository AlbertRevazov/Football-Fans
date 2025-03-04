import React, { useState, useEffect } from 'react'
import CustomTable from '@/shared/components/table'
import styles from '../../competitions.module.scss'

interface ICompetitionListProps<T> {
  data: T[]
  type: 'league' | 'group'
  onLoadMore: () => void
  totalItems: number
}

const CompetitionList = <T,>({ data, type, onLoadMore, totalItems }: ICompetitionListProps<T>) => {
  const [showLoadMore, setShowLoadMore] = useState(true)

  useEffect(() => {
    if (data.length >= totalItems) {
      setShowLoadMore(false)
    }
  }, [data])

  return (
    <div>
      <CustomTable data={data} type={type} />
      {showLoadMore && (
        <button className={styles.loadMoreButton} onClick={onLoadMore}>
          Загрузить ещё
        </button>
      )}
    </div>
  )
}

export default React.memo(CompetitionList) as typeof CompetitionList
