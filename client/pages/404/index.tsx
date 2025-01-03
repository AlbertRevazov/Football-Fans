import React, { FC } from 'react';
import Layout from '../../src/components/ui/layout';
import PageNotFound from '../../src/components/pageNotFound';

const NotFoundPage: FC = () => {
  return (
    <Layout>
      <PageNotFound />
    </Layout>
  );
};
export default NotFoundPage;
