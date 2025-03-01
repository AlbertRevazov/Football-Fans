import React, { FC } from 'react';
import Layout from '../../src/shared/ui/layout';
import DateFilter from '../../src/shared/components/dateFilter';
import Matches from '../../src/features/matches';

const MatchesPage: FC = () => {
  return (
    <Layout>
      <DateFilter isYear={false} />
      <Matches />
    </Layout>
  );
};

export default MatchesPage;
