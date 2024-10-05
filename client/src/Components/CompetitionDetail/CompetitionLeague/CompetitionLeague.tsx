import React, { FC, useState } from 'react';
import { Table } from '@/types/Competitions';
import CTable from '@/Common/CTable';
import styles from '../CompetitionsDetail.module.scss';

interface ICompetitionLeagueProps {
  data: Table[];
}

const CompetitionLeague: FC<ICompetitionLeagueProps> = ({ data }) => {
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
export default CompetitionLeague;
