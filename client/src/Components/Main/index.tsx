import React, { FC } from 'react'
import styles from './Main.module.scss'
import { useAppSelector } from '@/redux/hooks'

export const Main: FC = () => {
	const { status } = useAppSelector(s => s.auth)
	return (
		<div className={styles.main_root}>
			<div className={styles.main_container}>
				{!!status && <> {status}</>}
				<section className={styles.main_about}>
					<div className={styles.main_title_wrap}>
						<p className={styles.main_title}>football fans</p>
						<p className={styles.main_subtitle}>
							это площадка, которая объединяет настоящих любителей футбола. Наш
							сайт предназначен для всех, кому интересна эта увлекательная игра,
							ведь футбол – это не просто спорт, это целый мир, полный эмоций,
							страсти и соперничества.
						</p>
					</div>
				</section>
			</div>
		</div>
	)
}
