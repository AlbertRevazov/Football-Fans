import React, { FC } from 'react';
import PageNotFound from '../../src/pages/page-not-found';
import Layout from '../../src/pages/layout';

const NotFoundPage: FC = () => {
  return (
    <Layout>
      <PageNotFound />
    </Layout>
  );
};
export default NotFoundPage;
