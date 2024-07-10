import React, { FC } from 'react'
import { IGames } from '@/types/Games'
import Link from 'next/link'
import styles from '../../Matches.module.scss'

interface IMatchesCardProps {
	team: IGames
	isAway: boolean
}

export const MatchesCard: FC<IMatchesCardProps> = ({ team, isAway }) => {
	const teamArea = isAway ? team.awayTeam : team.homeTeam
	return (
		<div className={styles[isAway ? 'awayTeam' : 'homeTeam']}>
			<Link
				href={{
					pathname: `teams/${teamArea.id}`,
				}}
			>
				{teamArea.name}
			</Link>
			<img className={styles.img} src={teamArea.crest} alt='awayTeam crest' />
		</div>
	)
}
