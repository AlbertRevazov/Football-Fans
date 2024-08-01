import React, { FC } from 'react';
import { Layout } from '../../../src/Components/Layout';
import { LogIn } from '../../../src/Components/Auth/LogIn';

const LoginPage: FC = () => {
  return (
    <Layout>
      <LogIn />
    </Layout>
  );
};

export default LoginPage;
