import React, { FC } from 'react';
import  Layout  from '../../../src/UI/Layout';
import LoginAfterSign from '../../../src/components/LoginAfterSign';

const LoginPage: FC = () => {
  return (
    <Layout>
      <LoginAfterSign />
    </Layout>
  );
};

export default LoginPage;
