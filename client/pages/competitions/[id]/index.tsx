import React, { FC } from 'react';
import { Layout } from '../../../src/Components/Layout';
import { CompetitionsDetail } from '../../../src/Components/CompetitionDetail';

const CompetitionsDetailPage: FC = () => {
  return (
    <Layout>
      <CompetitionsDetail />
    </Layout>
  );
};

export default CompetitionsDetailPage;
