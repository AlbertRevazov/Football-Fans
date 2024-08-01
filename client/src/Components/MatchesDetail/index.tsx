import React, { FC, useEffect } from 'react';
import { HeaderDetailMatch } from './Section/Header';
import { HeadSection } from './Section/Head2HeadSection';
import { Loader } from '@/Common/Loading';
import { ApiErrors } from '@/data';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/router';
import { getMatchById } from '@/redux/Slices/Games';
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
  if (!!errorCode && errorCode !== 200) {
    return (
      <div className={styles.main}>
        Ошибка: {ApiErrors[errorCode]}
        {errorCode}
      </div>
    );
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
