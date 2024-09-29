import React, { FC } from 'react';
import styles from './Loading.module.scss';

const Loading: FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
};
export default Loading;
