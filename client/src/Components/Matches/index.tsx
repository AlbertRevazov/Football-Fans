import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getMatchesList } from '@/redux/Slices/Games'
import { MatchesCard } from '@/Components/Matches/Section/Card'
import { MatchesHeader } from './Section/Header'
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
				{games.length > 0 &&
					games.map(e => (
						<div key={e.id} className={styles.card}>
							<MatchesHeader match={e} />
							<div className={styles.teams}>
								<MatchesCard team={e} isAway={false} />
								-
								<MatchesCard team={e} isAway={true} />
							</div>
						</div>
					))}
			</div>
		</div>
	)
}
