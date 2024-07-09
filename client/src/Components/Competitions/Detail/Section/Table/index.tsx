import React, { FC } from 'react'
import { Table } from '@/types/Competitions'
import Link from 'next/link'
import styles from './LeagueTable.module.scss'
interface ILeagueTableProps {
	data: Table[]
}

export const LeagueTable: FC<ILeagueTableProps> = ({ data }) => {
	const sortedData = [...data]?.sort((a, b) => a.position - b.position)

	return (
		<div className={styles.table}>
			<h1>League Table</h1>
			<ul>
				{sortedData.map(el => (
					<li key={el.team.id}>
						Position - {el.position}{' '}
						<Link href={`/teams/${el.team.id}`} as={`/teams/${el.team.id}`}>
							{el.team.name}
						</Link>
						- {el.points} points
					</li>
				))}
			</ul>
		</div>
	)
}
