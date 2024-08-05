import React, { FC } from 'react';
import { NotFound } from '../../src/Components/404';
import { Layout } from '../../src/UI/Layout';

const NotFoundPage: FC = () => {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
};
export default NotFoundPage;
