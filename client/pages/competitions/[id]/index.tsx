import React, { FC } from 'react';
import { Layout } from '../../../src/UI/Layout';
import { CompetitionsDetail } from '../../../src/Components/CompetitionDetail';
import { DateFilter } from '../../../src/Common/DateFilter';

const CompetitionsDetailPage: FC = () => {
  return (
    <Layout>
      <DateFilter isYear={true} />
      <CompetitionsDetail />
    </Layout>
  );
};

export default CompetitionsDetailPage;
