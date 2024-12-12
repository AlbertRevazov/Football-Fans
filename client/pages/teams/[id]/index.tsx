import React, { FC } from 'react';
import Layout from '../../../src/pages/layout';
import TeamsDetail from '../../../src/components/team-detail';

const TeamsDetailPage: FC = () => {
  return (
    <Layout>
      <TeamsDetail />
    </Layout>
  );
};

export default TeamsDetailPage;
