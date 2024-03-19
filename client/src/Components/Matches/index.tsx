import React, { FC, useEffect } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { getMatchesList } from '@/redux/features/MatchesSlice'
import styles from './Matches.module.scss'

export const Matches: FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getMatchesList())
	}, [])

	return (
		<div className={styles.root}>
			<div className={styles.container}>Matches:FC</div>
		</div>
	)
}
