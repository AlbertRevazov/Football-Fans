import React, { FC } from 'react';
import Layout from '../../src/components/ui/layout';
import Auth from '../../src/components/auth';

const AuthPage: FC = () => {
  return (
    <Layout>
      <Auth />
    </Layout>
  );
};

export default AuthPage;
