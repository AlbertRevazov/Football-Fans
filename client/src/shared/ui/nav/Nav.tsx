import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getMe, logout } from '@/redux/Slices/Auth'
import { Links } from '@/shared/data'
import { useRouter } from 'next/router'
import { useIsWideScreen } from '@/shared/utils/useIsWideScreen'
import Link from 'next/link'
import styles from './nav.module.scss'
import BurgerSection from './burgerSection'
import Button from '../button'
import DesktopSection from './desktopSection'

const Nav: FC = () => {
  const dispatch = useAppDispatch()
  const [burger, setBurger] = useState<boolean>(false)
  const { user } = useAppSelector(state => state.auth)
  const router = useRouter()
  const isWide = useIsWideScreen()

  useEffect(() => {
    if (!user) {
      dispatch(getMe())
    }
  }, [dispatch])

  const getFilteredLinks = () => {
    return user ? Links : Links.filter(item => item.isGuest)
  }

  const handleLogout = useCallback(() => {
    dispatch(logout())
    router.push('/')
  }, [])

  const filteredLinks = useMemo(() => getFilteredLinks(), [user])

  return (
    <section>
      <nav className={styles.nav_root}>
        <Link href="/" className={styles.logo}>
          <img src="/svg/logo.svg" width={80} loading="lazy" />
          <p className={styles.logoTitle}>Football Fans</p>
        </Link>

        {burger && <BurgerSection handleLogout={handleLogout} links={filteredLinks} user={user} />}

        {!isWide ? (
          <Button onClick={() => setBurger(!burger)}>
            <img className={styles.menu} src="/svg/menu.svg" alt="menu" loading="lazy" />
          </Button>
        ) : (
          <DesktopSection handleLogout={handleLogout} user={user} links={filteredLinks} />
        )}
      </nav>
    </section>
  )
}

export default Nav
