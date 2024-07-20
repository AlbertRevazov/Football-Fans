import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { head2Head } from '@/redux/Slices/Games';
import { useRouter } from 'next/router';
import { HeaderDetailMatch } from './Section/Header';
import { HeadSection } from './Section/Head2HeadSection';
import { Loader } from '@/Common/Loading';
import { ApiErrors } from '@/data';
import styles from './MatchesDetail.module.scss';

export const MatchesDetail: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const { head2head, isLoading, errorCode, status } = useAppSelector((s) => s?.matches);

  useEffect(() => {
    if (id) {
      dispatch(head2Head(id as string));
    }
  }, [id, dispatch]);

  if (!head2head && isLoading) {
    return <Loader />;
  }

  if (!!errorCode && !!status) {
    return <div className={styles.container}>Ошибка: {ApiErrors[errorCode]}</div>;
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
