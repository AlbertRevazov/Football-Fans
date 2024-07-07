import React, { FC } from 'react'
import styles from './Main.module.scss'
import { useAppSelector } from '@/redux/hooks'

export const Main: FC = () => {
	const { status } = useAppSelector(s => s.auth)
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				{!!status && <> {status}</>}
				<section className={styles.about}>
					<div className={styles.title_wrap}>
						<p className={styles.title}>football fans</p>
						<p className={styles.subtitle}>
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
