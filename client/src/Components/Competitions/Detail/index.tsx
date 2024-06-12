import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getCompetitionById } from '@/redux/Slices/Competitions'
import { useAppDispatch } from '@/redux/hooks'
import styles from './CompetitionsDetail.module.scss'

export const CompetitionsDetail: FC = () => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	const { id } = router.query

	useEffect(() => {
		if (id) {
			dispatch(getCompetitionById(router.query.id as string))
		}
	}, [id])
	return <div>CompetitionsDetail:FC</div>
}
