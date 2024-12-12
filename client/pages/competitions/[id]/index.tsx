import React, { FC } from 'react';
import Layout from '../../../src/pages/layout';
import CompetitionsDetail from '../../../src/components/competitions/detail';
import DateFilter from '../../../src/components/ui/DateFilter';

const CompetitionsDetailPage: FC = () => {
  return (
    <Layout>
      <DateFilter isYear={true} />
      <CompetitionsDetail />
    </Layout>
  );
};

export default CompetitionsDetailPage;
