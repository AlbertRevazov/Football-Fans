import React, { FC } from 'react'
import styles from './login-after-sig.module.scss'
import Login from '@/shared/components/form'

const LoginAfterSign: FC = () => {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  )
}
export default LoginAfterSign
