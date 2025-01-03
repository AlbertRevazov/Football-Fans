import React, { FC, useState } from 'react';
import { Table } from '@/types/CompetitionsTypes';
import CustomTable from '@/common/table';
import styles from '../competitions.module.scss';

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
    <>
      <CustomTable list={list} />
      {list.length <= middleIdx && (
        <div className={styles.moreBtn} onClick={loadMoreHandle}>
          Load More
        </div>
      )}
    </>
  );
};
export default CompetitionLeague;
