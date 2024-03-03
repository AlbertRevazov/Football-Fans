import { ErrorMessage, Field } from "formik";
import React, { ReactNode } from "react";

type LabelProps = {
  isSign?: boolean;
  title: string;
  type: string;
  children?: ReactNode;
};

export const Label =({ isSign, title, type, children }: LabelProps) => {
  return (
    <>
      {!isSign ? (
        <label>
          {title}
          <Field name={title} type={type} autoComplete="off" />
          {title === "password" && children}
          <ErrorMessage component="div" name={title} />
        </label>
      ) : null}
    </>
  );
};
