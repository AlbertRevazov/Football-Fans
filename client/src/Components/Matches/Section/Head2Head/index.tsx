import React, { FC } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { head2Head } from '@/redux/Slices/Games';
import styles from '../../Matches.module.scss';

type Head2HeadProps = {
  id: number;
};

export const Head2Head: FC<Head2HeadProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  return <div onClick={() => dispatch(head2Head(String(id)))}>История Противостояния Команд</div>;
};
