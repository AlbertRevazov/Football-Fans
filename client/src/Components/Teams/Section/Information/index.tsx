import { useAppSelector } from '@/redux/hooks'
import React, { FC } from 'react'
import styles from './Information.module.scss'

export const TeamInfo: FC = () => {
	const { team } = useAppSelector(s => s.team)

	return (
		<div className={styles.root}>
			<h2>Information</h2>
			<ul>
				<li>Основан в - {team?.founded}</li>
				<li>Адрес - {team?.address}</li>
				<li>Домашний стадион - {team?.venue}</li>
				<li>Сайт - {team?.website}</li>
				<li>
					Участвует в - {team?.runningCompetitions.map(el => <>{el.name}</>)}
				</li>
				<li>Главный тренер - {team?.coach.name}</li>
			</ul>
		</div>
	)
}
