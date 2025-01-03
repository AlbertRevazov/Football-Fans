import React, { FC } from 'react';
import Layout from '../../../src/components/ui/layout';
import MatchesDetail from '../../../src/components/matches/detail';

const MatchesDetailPage: FC = () => {
  return (
    <Layout>
      <MatchesDetail />
    </Layout>
  );
};

export default MatchesDetailPage;
