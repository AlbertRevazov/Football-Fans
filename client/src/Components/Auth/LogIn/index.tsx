import React, { FC } from 'react';
import styles from './LogIn.module.scss';
import { Login } from '@/Common/Form/LoginForm';

export const LogIn: FC = () => {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
};
