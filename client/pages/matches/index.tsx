import React, { FC } from 'react';
import Layout from '../../src/components/ui/layout';
import DateFilter from '../../src/common/dateFilter';
import Matches from '../../src/components/matches';

const MatchesPage: FC = () => {
  return (
    <Layout>
      <DateFilter isYear={false} />
      <Matches />
    </Layout>
  );
};

export default MatchesPage;
