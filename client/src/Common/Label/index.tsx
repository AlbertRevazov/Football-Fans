import React, { ReactNode } from "react";
import { ErrorMessage, Field } from "formik";
import { labelPlaceholders } from "../Form/data";
import styles from "./Label.module.scss";

type LabelProps = {
  title: string;
  type: string;
  children?: ReactNode;
};

export const Label = ({ title, type, children }: LabelProps) => {
  return (
    <label className={styles.label}>
      {title}
      <Field
        className={styles.field}
        name={title}
        type={type}
        autoComplete="off"
        placeholder={labelPlaceholders[title]}
      />
      {title === "password" && children}
      <ErrorMessage component="div" name={title} className={styles.invalid} />
    </label>
  );
};
