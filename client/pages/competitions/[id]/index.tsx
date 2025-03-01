import React, { FC } from 'react';
import Layout from '../../../src/shared/ui/layout';
import CompetitionsDetail from '../../../src/features/competitions/detail';
import DateFilter from '../../../src/shared/components/dateFilter';

const CompetitionsDetailPage: FC = () => {
  return (
    <Layout>
      <DateFilter isYear={true} />
      <CompetitionsDetail />
    </Layout>
  );
};

export default CompetitionsDetailPage;
