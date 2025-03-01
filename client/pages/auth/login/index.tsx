import React, { FC } from 'react';
import Layout from '../../../src/shared/ui/layout';
import LoginAfterSign from '../../../src/shared/components/loginAfterSign';

const LoginPage: FC = () => {
  return (
    <Layout>
      <LoginAfterSign />
    </Layout>
  );
};

export default LoginPage;
