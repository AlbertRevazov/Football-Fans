import React, { FC, ReactNode } from 'react';
import styles from './CButton.module.scss';

interface ICButtonProps {
  title?: string;
  onClick?: () => void;
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}

const CButton: FC<ICButtonProps> = ({ title, children, onClick, type, disabled }) => {
  return (
    <button
      name="button"
      type={type ? type : 'button'}
      disabled={disabled}
      className={children ? styles.children : styles.button}
      onClick={onClick ? onClick : () => {}}
    >
      {!title ? children : title}
    </button>
  );
};

export default CButton;
