import React, { FC } from 'react';
import Layout from '../../../src/pages/layout';
import MatchesDetail from '../../../src/components/matches/detail';

const MatchesDetailPage: FC = () => {
  return (
    <Layout>
      <MatchesDetail />
    </Layout>
  );
};

export default MatchesDetailPage;
