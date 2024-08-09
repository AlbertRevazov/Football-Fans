import React, { FC } from 'react';
import styles from './LoginAfterSign.module.scss';
import { Login } from '@/common/Form/LoginFormSection';

const LoginAfterSign: FC = () => {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
};
export default LoginAfterSign;
