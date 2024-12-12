import React, { FC } from 'react';
import Layout from '../../src/pages/layout';
import DateFilter from '../../src/components/ui/DateFilter';
import Matches from '../../src/components/Matches';

const MatchesPage: FC = () => {
  return (
    <Layout>
      <DateFilter isYear={false} />
      <Matches />
    </Layout>
  );
};

export default MatchesPage;
