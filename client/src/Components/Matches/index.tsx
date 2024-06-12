import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getMatchesList } from '@/redux/Slices/Games'
import styles from './Matches.module.scss'

export const Matches: FC = () => {
	const dispatch = useAppDispatch()
	const { games, isLoading } = useAppSelector(s => s.matches)

	useEffect(() => {
		dispatch(getMatchesList())
	}, [])

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				{isLoading ? (
					<>Loading....</>
				) : (
					<>
						{games.map(e => (
							<div key={e.id}>
								{e.homeTeam.name}-{e.awayTeam.name}
							</div>
						))}
					</>
				)}
			</div>
		</div>
	)
}
