import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/router';
import { getMatchById } from '@/redux/slices/Games';
import HeaderSection from './HeaderSection/HeaderSection';
import Head2headSection from './Head2HeadSection/Head2HeadSection';
import Loading from '../../Common/Loader';
import Error from '../../Common/ErrorComponent/Error';
import styles from './MatchesDetail.module.scss';

const MatchesDetail: FC = () => {
  const { head2head, isLoading, errorCode } = useAppSelector((s) => s.matches);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) dispatch(getMatchById(id as string));
  }, [dispatch, id]);

  if (!head2head && isLoading) {
    return <Loading />;
  }

  if (!!errorCode) {
    return <Error code={errorCode} />;
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {head2head?.match && (
          <section className={styles.matchSection}>
            <HeaderSection data={head2head.match} />
          </section>
        )}
        {/* <div className={styles.divider} /> */}
        {head2head?.head ? (
          <section className={styles.headSection}>
            <Head2headSection data={head2head.head} />
          </section>
        ) : (
          <>Истории противостояний не найдено</>
        )}
      </div>
    </main>
  );
};
export default MatchesDetail;
