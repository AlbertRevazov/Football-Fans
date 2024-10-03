import React, { FC, useState } from 'react';
import { Standings } from '@/types/Competitions';
import CTable from '@/Common/CTable';
import styles from '../CompetitionsDetail.module.scss';
interface ICompetitionDetailGroupProps {
  data: Standings[];
}

const CompetitionDetailGroup: FC<ICompetitionDetailGroupProps> = ({ data }) => {
  const middleIdx = data.length / 2;
  const [list, setList] = useState<Standings[]>(data.slice(0, middleIdx));

  const loadMoreHandle = () => {
    setList((prev) => [...prev, ...data.slice(middleIdx, data.length)]);
  };

  return (
    <section className={styles.group}>
      <CTable group={list} />
      {list.length <= middleIdx && (
        <button onClick={loadMoreHandle} className={styles.loadMoreButton}>
          Load More
        </button>
      )}
    </section>
  );
};
export default CompetitionDetailGroup;
