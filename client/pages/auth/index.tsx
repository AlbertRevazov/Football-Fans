import React, { FC } from 'react';
import Layout from '../../src/shared/ui/layout';
import Auth from '../../src/features/auth';

const AuthPage: FC = () => {
  return (
    <Layout>
      <Auth />
    </Layout>
  );
};

export default AuthPage;
