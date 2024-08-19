import React, { FC } from 'react';
import Layout from '../../src/components/Layout';
import Auth from '../../src/Components/Auth';

const AuthPage: FC = () => {
  return (
    <Layout>
      <Auth />
    </Layout>
  );
};

export default AuthPage;
