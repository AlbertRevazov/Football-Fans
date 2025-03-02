import React, { FC } from 'react'
import { User } from '@/types/AuthTypes'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './desktop-section.module.scss'
import Button from '../../button'

interface DesktopSectionProps {
  links: {
    id: number
    url: string
    title: string
    isGuest: boolean
  }[]
  handleLogout: () => void
  user: User | null
}

const DesktopSection: FC<DesktopSectionProps> = ({ handleLogout, links, user }) => {
  const router = useRouter()
  return (
    <ul className={styles.ul}>
      {links.map(link => {
        const isActiveUrl = link.url === router.pathname
        return (
          <Link key={link.id} href={link.url}>
            <li className={styles[isActiveUrl ? 'li_active' : 'li']}>{link.title}</li>
          </Link>
        )
      })}

      {user ? (
        <Button title="Logout" onClick={handleLogout} />
      ) : (
        <Link href="/auth" className={styles.btn}>
          <Button title="Sign Up" />
        </Link>
      )}
    </ul>
  )
}

export default DesktopSection
