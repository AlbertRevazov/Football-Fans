import React, { FC } from 'react';
import { HeaderDetailMatch } from './Section/Header';
import { HeadSection } from './Section/Head2HeadSection';
import { Loader } from '@/Common/Loading';
import { ApiErrors } from '@/data';
import { GamesState } from '@/types/Games';
import styles from './MatchesDetail.module.scss';

export const MatchesDetail: FC<{ initialMatchesState: GamesState }> = ({ initialMatchesState }) => {
  const { head2head, isLoading, errorCode, status } = initialMatchesState;

  if (!head2head && isLoading) {
    return <Loader />;
  }
  if (!!errorCode && errorCode !== 200) {
    return <div className={styles.main}>Ошибка: {ApiErrors[errorCode]}</div>;
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
