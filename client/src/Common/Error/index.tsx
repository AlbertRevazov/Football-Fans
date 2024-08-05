import React, { FC } from 'react';
import styles from './Error.module.scss';
import { ApiErrors } from '@/data';

interface IErrorProps {
  code: number;
}

export const Error: FC<IErrorProps> = ({ code }) => {
  return <div className={styles.container}> Ошибка: {ApiErrors[code]}</div>;
};
