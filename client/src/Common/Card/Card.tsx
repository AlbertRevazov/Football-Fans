import React, { FC } from 'react';
import Link from 'next/link';
import styles from './Card.module.scss';

interface ICardProps {
  data: {
    id: number;
    crest: string;
    title: string;
  };
  link: string;
}

const Card: FC<ICardProps> = ({ data, link }) => {
  return (
    <Link className={styles.container} href={link}>
      <div className={styles.card}>
        <img className={styles.crest} src={data?.crest} alt={data?.title} loading="lazy" />
      </div>
      <h3 className={styles.title}>{data?.title}</h3>
    </Link>
  );
};

export default Card;
