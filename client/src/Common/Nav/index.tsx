import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getMe, logout } from '@/redux/Slices/Auth'
import { Links } from '@/data'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Nav.module.scss'

export const Nav: FC = () => {
	const dispatch = useAppDispatch()
	const { user } = useAppSelector(state => state.auth)
	const router = useRouter()

	useEffect(() => {
		dispatch(getMe())
	}, [])

	return (
		<section className={styles.nav_section}>
			<nav className={styles.nav_root}>
				<Link href='/' className={styles.logo}>
					<img src='/svg/logo.svg' width={80} className={styles.logo_img} loading='lazy'/>
				</Link>
				<ul className={styles.ul}>
					{Links.map(link => {
						const isActiveUrl = link.url === router.pathname
						return (
							<Link key={link.id} href={link.url}>
								<li className={styles[isActiveUrl ? 'li_active' : 'li']}>
									{link.title}
								</li>
							</Link>
						)
					})}

					{user ? (
						<span className={styles.btn} onClick={() => dispatch(logout())}>
							EXIT
						</span>
					) : (
						<Link href='/auth' className={styles.btn}>
							Sign Up
						</Link>
					)}
				</ul>
			</nav>
		</section>
	)
}
