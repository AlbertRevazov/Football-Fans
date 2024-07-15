import React, { FC } from 'react';
import styles from './Loading.module.scss';

export const Loader: FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
};
