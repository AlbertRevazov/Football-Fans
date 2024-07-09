import React, { FC } from 'react'
import { Standings } from '@/types/Competitions'
import Link from 'next/link'
import styles from './GroupTable.module.scss'

export interface IGroupTableProps {
	data: Standings[]
}

export const GroupTable: FC<IGroupTableProps> = ({ data }) => {
	return (
		<div className={styles.table}>
			<h1>League Table</h1>
			<ul>
				{data.map(basket => (
					<p key={basket.group}>
						{basket.group}
						{basket.table.map(team => (
							<li key={team.team.id}>
								{team.position}{' '}
								<Link
									href={`/teams/${team.team.id}`}
									as={`/teams/${team.team.id}`}
								>
									{team.team.name}
								</Link>
								- {team.points} points
							</li>
						))}
					</p>
				))}
			</ul>
		</div>
	)
}
