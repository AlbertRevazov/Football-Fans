import React, { FC, useState } from 'react';
import { Table } from '@/types/Competitions';
import CTable from '@/Common/Table/Table';
import styles from '../CompetitionsDetail.module.scss';

interface ICompetitionDetailLeagueProps {
  data: Table[];
}

const CompetitionDetailLeague: FC<ICompetitionDetailLeagueProps> = ({ data }) => {
  const middleIdx = data.length / 2;
  const [list, setList] = useState<Table[]>(data.slice(0, middleIdx));

  const loadMoreHandle = () => {
    setList((prev) => [...prev, ...data.slice(middleIdx, data.length)]);
  };

  return (
    <section className={styles.table}>
      <CTable list={list} />
      {list.length <= middleIdx && (
        <button onClick={loadMoreHandle} className={styles.loadMoreButton}>
          Load More
        </button>
      )}
    </section>
  );
};
export default CompetitionDetailLeague;
