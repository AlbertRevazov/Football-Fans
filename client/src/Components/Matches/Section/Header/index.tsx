import React, { FC } from 'react'
import { IGames } from '@/types/Games'
import Link from 'next/link'
import styles from '../../Matches.module.scss'

interface IMatchesHeaderPRops {
	match: IGames
}

export const MatchesHeader: FC<IMatchesHeaderPRops> = ({ match }) => {
	const utcDate = new Date(match.utcDate)
	const hours = Number(utcDate.getUTCHours()) + 3
	const minutes = utcDate.getUTCMinutes()
	const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
	return (
		<>
			<div className={styles.tournament}>
				<Link
					className={styles.competition}
					href={{
						pathname: `competitions/${match.competition.code}`,
					}}
				>
					{match.competition.name}
				</Link>

				<img
					className={styles.img}
					src={match.competition.emblem}
					alt='competition crest'
				/>
			</div>
			Тур {match.matchday} {formattedTime} - MSK
		</>
	)
}
