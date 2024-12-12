import React, { FC } from 'react';
import styles from './LoginAfterSign.module.scss';
import LoginFormSection from '@/components/ui/Form/LoginFormSection';

const LoginAfterSign: FC = () => {
  return (
    <main className={styles.main}>
      <LoginFormSection />
    </main>
  );
};
export default LoginAfterSign;
