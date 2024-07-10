import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getTeamById } from '@/redux/Slices/Team'
import styles from './TeamsDetail.module.scss'
import { Squad } from './Section/Squad'
import { TeamInfo } from './Section/Information'

export const TeamsDetail: FC = () => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	const { id } = router.query
	const { team, isLoading } = useAppSelector(s => s.team)
	console.log(team, 'team')

	useEffect(() => {
		if (id) {
			dispatch(getTeamById(id as string))
		}
	}, [id])

	if (!team || isLoading) return <>Loading...</>

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				{isLoading || !team ? (
					<div className={styles.loading}>Loading...</div>
				) : (
					<>
						<div className={styles.wrap}>
							<div className={styles.header}>
								<h1>{team.name}</h1>
							</div>
							<img
								loading='lazy'
								src={team.crest}
								alt='emblem'
								className={styles.emblem}
							/>
						</div>
						<div className={styles.content}>
							<TeamInfo />
							<Squad />
						</div>
					</>
				)}
			</div>
		</div>
	)
}
