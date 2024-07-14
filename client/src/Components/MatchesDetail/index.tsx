import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { head2Head } from '@/redux/Slices/Games';
import { useRouter } from 'next/router';
import { HeaderDetailMatch } from './Section/Header';
import { HeadSection } from './Section/Head2HeadSection';
import styles from './MatchesDetail.module.scss';

export const MatchesDetail: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const { head2head, isLoading } = useAppSelector((s) => s?.matches);

  useEffect(() => {
    if (id) {
      dispatch(head2Head(id as string));
    }
  }, []);

  if (!head2head && isLoading) {
    return <div className={styles.container}>Loading..</div>;
  }

  return (
    <div className={styles.container}>
      {!!head2head?.match && <HeaderDetailMatch data={head2head?.match} />}
      <div className={styles.divider} />
      {!!head2head?.head && <HeadSection data={head2head?.head} />}
    </div>
  );
};
