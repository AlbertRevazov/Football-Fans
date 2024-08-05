import React, { FC, useEffect } from 'react';
import { HeaderDetailMatch } from './Section/Header';
import { HeadSection } from './Section/Head2HeadSection';
import { Loader } from '@/common/Loading';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/router';
import { getMatchById } from '@/redux/slices/Games';
import { Error } from '@/common/Error';
import styles from './MatchesDetail.module.scss';

export const MatchesDetail: FC = () => {
  const { head2head, isLoading, errorCode } = useAppSelector((s) => s.matches);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    dispatch(getMatchById(id as string));
  }, [dispatch, id]);

  if (!head2head && isLoading) {
    return <Loader />;
  }

  if (!!errorCode) {
    return <Error code={errorCode} />;
  }

  return (
    <main className={styles.main}>
      {head2head?.match && (
        <section className={styles.matchSection}>
          <HeaderDetailMatch data={head2head.match} />
        </section>
      )}
      <div className={styles.divider} />
      {head2head?.head && (
        <section className={styles.headSection}>
          <HeadSection data={head2head.head} />
        </section>
      )}
    </main>
  );
};
