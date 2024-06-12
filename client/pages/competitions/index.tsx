import React, { FC } from 'react'
import { Layout } from '../../src/Components/Layout'
import { Competitions } from '../../src/Components/Competitions'
import { AuthUsersRouter} from '../../src/utils/PrivateRouter'

const CompetitionsPage: FC = () => {
	return (
		<Layout>
			<AuthUsersRouter>
				<Competitions />
			</AuthUsersRouter>
		</Layout>
	)
}

export default CompetitionsPage
