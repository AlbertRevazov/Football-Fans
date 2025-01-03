import React, { FC } from 'react';
import Layout from '../../../src/components/ui/layout';
import LoginAfterSign from '../../../src/components/loginAfterSign';

const LoginPage: FC = () => {
  return (
    <Layout>
      <LoginAfterSign />
    </Layout>
  );
};

export default LoginPage;
