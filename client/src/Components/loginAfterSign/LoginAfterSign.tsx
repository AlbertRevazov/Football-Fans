import React, { FC } from 'react';
import styles from './login-after-sig.module.scss';
import LoginFormSection from '@/common/form/loginForm';

const LoginAfterSign: FC = () => {
  return (
    <main className={styles.main}>
      <LoginFormSection />
    </main>
  );
};
export default LoginAfterSign;
