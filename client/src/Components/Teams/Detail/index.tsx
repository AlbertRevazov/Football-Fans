import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getTeamById } from '@/redux/Slices/Team'
import styles from './TeamsDetail.module.scss'

export const TeamsDetail: FC = () => {
	const dispatch = useAppDispatch()
	const { team, isLoading } = useAppSelector(s => s.team)
	const router = useRouter()
	const { id } = router.query
	console.log(id, '', team)
	useEffect(() => {
		if (id) {
			dispatch(getTeamById(id as string))
		}
	}, [id])
	if (!team || isLoading) return <>LOADDDDDDDDDDDDDDDDDDDINGs</>
	return <div className={styles.root}>{team.name}</div>
}
