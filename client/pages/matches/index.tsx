import React, { FC } from 'react'
import { Layout } from '../../src/Components/Layout'
import { Matches } from '../../src/Components/Matches'
import { AuthUsersRouter } from '../../src/utils/PrivateRouter'

const MatchesPage: FC = () => {
	return (
		<Layout>
			{/* <AuthUsersRouter> */}
				<Matches />
			{/* </AuthUsersRouter> */}
		</Layout>
	)
}

export default MatchesPage
