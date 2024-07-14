import React, { FC } from 'react';
import { Layout } from '../../../src/Components/Layout';
import { MatchesDetail } from '../../../src/Components/MatchesDetail';

const MatchesDetailPage: FC = () => {
  return (
    <Layout>
      <MatchesDetail />
    </Layout>
  );
};

export default MatchesDetailPage;
