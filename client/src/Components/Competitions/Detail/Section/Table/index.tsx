import { Standings } from '@/types/Competitions'
import Link from 'next/link'
import React, { FC, Fragment, useEffect } from 'react'

interface ILeagueTableProps {
	data: Standings[]
}

export const LeagueTable: FC<ILeagueTableProps> = ({ data }) => {
	const sortedData = [...data]?.sort((a, b) => a.position - b.position)

	return (
		<div>
			<h1>League Table</h1>
			<ul>
				{sortedData.map(el => (
					<Fragment key={el.team.id}>
						<li>
							Position - {el.position}{' '}
							<Link href={`/teams/${el.team.id}`} as={`/teams/${el.team.id}`}>
								{el.team.name}
							</Link>
							- {el.points} points
						</li>
					</Fragment>
				))}
			</ul>
		</div>
	)
}
