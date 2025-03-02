import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useRouter } from 'next/router'
import { getMatchById } from '@/redux/Slices/Games'
import HeaderSection from './header'
import Error from '@/shared/components/error'
import Loading from '@/shared/components/loader'
import styles from './matches-detail.module.scss'

const MatchesDetail: FC = () => {
  const { head2head, isLoading, errorCode } = useAppSelector(s => s.matches)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) dispatch(getMatchById(id as string))
  }, [dispatch, id])

  if (!head2head && isLoading) {
    return <Loading />
  }

  if (!!errorCode) {
    return <Error code={errorCode} />
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {head2head?.match && (
          <section className={styles.matchSection}>
            <HeaderSection data={head2head.match} />
          </section>
        )}
        {/*
        api does not return data properly
        return it when it's fixed
        {head2head?.head ? (
          <section className={styles.headSection}>
            <Head2headSection data={head2head.head} />
          </section>
        ) : (
          <>Истории противостояний не найдено</>
        )} */}
      </div>
    </main>
  )
}
export default MatchesDetail
