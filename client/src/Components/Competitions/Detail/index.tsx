import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getCompetitionById } from '@/redux/Slices/Competitions'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import styles from './CompetitionsDetail.module.scss'

export const CompetitionsDetail: FC = () => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	const { id } = router.query
	const { standing, isLoading } = useAppSelector(s => s.tournament)
	useEffect(() => {
		if (id) {
			dispatch(getCompetitionById(router.query.id as string))
		}
	}, [id])

	// if (!isLoading && !standing?.startDate) {
	// 	return <> Error </>
	// }

	let startYear = standing?.startDate.substring(0, 4)
	let endYear = standing?.endDate.substring(0, 4)
	let currentSeason = `${startYear}/${endYear}`
	console.log(standing, '==', currentSeason)
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				{isLoading ? (
					<>Loading...</>
				) : (
					<>
						{standing?.name} Season - {currentSeason}
					</>
				)}
			</div>
		</div>
	)
}
