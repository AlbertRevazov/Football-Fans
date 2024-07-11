import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getMatchesList } from '@/redux/Slices/Games'
import { MatchesCard } from '@/Components/Matches/Section/Card'
import { MatchesHeader } from './Section/Header'
import { MatchStatuses } from '@/data'
import styles from './Matches.module.scss'

export const Matches: FC = () => {
	const dispatch = useAppDispatch()
	const { games, isLoading, status } = useAppSelector(s => s.matches)

	useEffect(() => {
		dispatch(getMatchesList())
	}, [dispatch])

	if (status) {
		return (
			<div className={styles.container} style={{ color: 'red' }}>
				{status}
			</div>
		)
	}
	if (isLoading) {
		return <div className={styles.container}>Loading...</div>
	}
	if (!games) {
		return (
			<div className={styles.container} style={{ color: 'red' }}>
				Something went wrong
			</div>
		)
	}

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				{!isLoading && !games.length ? ' Матчей не найдено' : 'Ближайшие матчи'}
				{games.length > 0 &&
					games.map(e => (
						<div key={e.id} className={styles.card}>
							<MatchesHeader match={e} />
							<div className={styles.teams}>
								<MatchesCard match={e} isAway={false} />
								-
								<MatchesCard match={e} isAway={true} />
							</div>
							{MatchStatuses[e.status as keyof typeof MatchStatuses]}
						</div>
					))}
			</div>
		</div>
	)
}
