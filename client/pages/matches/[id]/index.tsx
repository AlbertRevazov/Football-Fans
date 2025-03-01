import React, { FC } from 'react';
import Layout from '../../../src/shared/ui/layout';
import MatchesDetail from '../../../src/features/matches/detail';

const MatchesDetailPage: FC = () => {
  return (
    <Layout>
      <MatchesDetail />
    </Layout>
  );
};

export default MatchesDetailPage;
