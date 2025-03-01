import React, { FC } from 'react';
import { ApiErrors } from '@/shared/data';
import styles from './error.module.scss';

interface IErrorProps {
  code: number;
}

const Error: FC<IErrorProps> = ({ code }) => {
  return <div className={styles.container}> Ошибка: {ApiErrors[code]}</div>;
};

export default Error;
