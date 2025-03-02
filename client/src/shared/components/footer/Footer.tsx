import { FC } from 'react'
import styles from './footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.title}>
          © 2024 Copyright Football Fans || All Right Reserved || Powered by
        </p>
        <a className={styles.subTitle} href="http://revaz.vercel.app" target="_blank">
          A.Revazov
        </a>
        <img className={styles.gear} src="/svg/gear.svg" alt="gear" loading="lazy" />
      </div>
    </footer>
  )
}
export default Footer
