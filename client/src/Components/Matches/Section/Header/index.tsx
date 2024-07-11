import React, { FC } from 'react'
import { IGames } from '@/types/Games'
import { DateFormate } from '@/utils/Date'
import Link from 'next/link'
import styles from '../../Matches.module.scss'

interface IMatchesHeaderPRops {
	match: IGames
}

export const MatchesHeader: FC<IMatchesHeaderPRops> = ({ match }) => {
	return (
		<div className={styles.tournament}>
			<div className={styles.matchday}>
				<p>Тур {match.matchday}</p>
				{DateFormate(match.utcDate)}
			</div>
			<Link
				className={styles.competition}
				href={{
					pathname: `competitions/${match.competition.code}`,
				}}
			>
				{match.competition.name}
				<img
					className={styles.img}
					src={match.competition.emblem}
					alt='competition crest'
				/>
			</Link>
		</div>
	)
}
