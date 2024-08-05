import React from 'react';
import { ErrorMessage, Field, FieldInputProps, FormikProps } from 'formik';
import { labelPlaceholders } from '../../common/Form/data';
import InputMask from 'react-input-mask';
import styles from './Label.module.scss';

type LabelProps = {
  title: string;
  type: string;
  children?: React.ReactNode;
};

export const Label = ({ title, type, children }: LabelProps) => {
  return (
    <label className={styles.label}>
      {title}
      {title === 'password' && children}
      {title === 'phone' ? (
        <Field name={title}>
          {({ field, form }: { field: FieldInputProps<any>; form: FormikProps<any> }) => (
            <InputMask
              mask="+7 (999) 999-99-99"
              maskChar=" "
              {...field}
              onChange={(e) => {
                const value = e.target.value.replace(/[^\d]/g, '');
                form.setFieldValue(field.name, value);
              }}
              className={styles.field}
              placeholder="8 (999) 999-99-99"
            />
          )}
        </Field>
      ) : (
        <Field
          className={styles.field}
          name={title}
          type={type}
          placeholder={labelPlaceholders[title]}
          autoComplete="current-password"
        />
      )}
      <ErrorMessage component="div" name={title} className={styles.invalid} />
    </label>
  );
};
