import React, { FC } from 'react';
import Layout from '../../../src/components/ui/layout';
import CompetitionsDetail from '../../../src/components/competitions/detail';
import DateFilter from '../../../src/common/dateFilter';

const CompetitionsDetailPage: FC = () => {
  return (
    <Layout>
      <DateFilter isYear={true} />
      <CompetitionsDetail />
    </Layout>
  );
};

export default CompetitionsDetailPage;
