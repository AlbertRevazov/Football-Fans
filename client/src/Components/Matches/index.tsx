import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getMatchesList } from '@/redux/Slices/Games'
import styles from './Matches.module.scss'
import Link from 'next/link'

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
						{games.map(e => {
							const utcDate = new Date(e.utcDate)
							const hours = Number(utcDate.getUTCHours()) + 3
							const minutes = utcDate.getUTCMinutes()
							const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
							const slug = e.competition.code
							return (
								<div key={e.id} className={styles.card}>
									<div className={styles.tournament}>
										<Link
											href={{
												pathname: `competitions/${e.competition.code}`,
											}}
										>
											{e.competition.name}
										</Link>

										<img
											className={styles.img}
											src={e.competition.emblem}
											alt='competition crest'
										/>
									</div>
									Тур {e.matchday} {formattedTime} - MSK
									<div className={styles.teams}>
										{' '}
										<img
											className={styles.img}
											src={e.homeTeam.crest}
											alt='competition crest'
										/>
										<Link
											href={{
												pathname: `teams/${e.homeTeam.id}`,
											}}
										>
											{e.homeTeam.name}
										</Link>
										<Link
											href={{
												pathname: `teams/${e.awayTeam.id}`,
											}}
										>
											{e.awayTeam.name}
										</Link>
										<img
											className={styles.img}
											src={e.awayTeam.crest}
											alt='competition crest'
										/>
									</div>
								</div>
							)
						})}
					</>
				)}
			</div>
		</div>
	)
}
