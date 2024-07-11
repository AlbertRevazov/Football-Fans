import React, { FC } from 'react'
import { Layout } from '../../src/Components/Layout'
import { Matches } from '../../src/Components/Matches'
import { DataPicker } from '../../src/Common/DatePicker'

const MatchesPage: FC = () => {
	return (
		<Layout>
			<DataPicker />
			<Matches />
		</Layout>
	)
}

export default MatchesPage
