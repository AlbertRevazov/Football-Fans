import React, { FC, ReactNode } from 'react';
import styles from './CButton.module.scss';

interface ICButtonProps {
  title?: string;
  onClick?: () => void;
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  minWidth?: string;
}

const CButton: FC<ICButtonProps> = ({ title, children, onClick, type, disabled, minWidth }) => {
  if (!!disabled)
    return (
      <button className={styles.disabled} style={{ minWidth }}>
        {title}
      </button>
    );

  return (
    <button
      name="button"
      type={type ? type : 'button'}
      style={{ minWidth }}
      className={children ? styles.children : styles.button}
      onClick={onClick ? onClick : () => {}}
    >
      {!title ? children : title}
    </button>
  );
};

export default CButton;
