import React, { FC, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { getCompetitionById } from '@/redux/Slices/Competitions'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { LeagueTable } from './Section/Table'
import styles from './CompetitionsDetail.module.scss'

export const CompetitionsDetail: FC = () => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	const { id } = router.query
	const { standing, isLoading, error } = useAppSelector(
		state => state.tournament
	)

	useEffect(() => {
		if (id) {
			dispatch(getCompetitionById(id as string))
		}
	}, [id, dispatch])

	const getSeason = useCallback((startDate: string, endDate: string) => {
		const startYear = startDate?.substring(0, 4)
		const endYear = endDate?.substring(0, 4)
		return `${startYear}/${endYear}`
	}, [])

	if (error) {
		return <div>Error: {error}</div>
	}

	const currentSeason = standing
		? getSeason(standing.startDate, standing.endDate)
		: ''
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				{isLoading || !standing ? (
					<div className={styles.loading}>Loading...</div>
				) : (
					<div className={styles.content}>
						<h1>{standing.name}</h1>
						<p>Season: {currentSeason}</p>
						<LeagueTable data={standing?.table} />
					</div>
				)}
			</div>
		</div>
	)
}
