import React, { useState } from 'react'
import SignFormSection from '@/shared/components/form/sign'
import LoginFormSection from '@/shared/components/form/login'
import styles from './auth.module.scss'

const Auth = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <section className={styles.container}>
      {toggle ? <SignFormSection /> : <LoginFormSection />}
      <div className={styles.toogle_title}>
        {toggle ? 'У меня есть аккаунт' : 'У меня нет аккаунта ?'}
        <span className={styles.toogle_subtitle} onClick={() => setToggle(!toggle)}>
          {toggle ? 'Войти' : 'Создать сейчас'}
        </span>
      </div>
    </section>
  )
}
export default Auth
