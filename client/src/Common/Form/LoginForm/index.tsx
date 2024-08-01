import React, { FC, useEffect, useState } from 'react';
import { initialValues, validationSchema } from './data';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/router';
import { getUserLogin } from '@/redux/Slices/Auth';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Label } from '../../Label';
import styles from '../Form.module.scss';

export const Login: FC = () => {
  const { status, message } = useAppSelector((s) => s.auth);
  const [isPass, setIsPass] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === '200') {
      router.push('/');
    }
  }, [status, router]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(getUserLogin(values));
          setSubmitting(false);
          router.push('/');
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          {!!message && <div style={{ color: 'red' }}> {message}</div>}
          <Label title="email" type="email" />
          <Label title="password" type={isPass ? 'text' : 'password'}>
            <img
              src={isPass ? '/img/show.png' : '/img/hide.png'}
              alt="password img"
              loading="lazy"
              onClick={() => setIsPass(!isPass)}
            />
          </Label>
          <label htmlFor="remember" className={styles.checkbox_label}>
            <Field type="checkbox" name="remember" className={styles.checkbox} />
            <span className={styles.fe}></span>
            Запомнить меня
          </label>
          <ErrorMessage component="div" name="remember" className={styles.invalid} />
          <Field name="button" type="submit" disabled={isSubmitting} className={styles.btn} />
        </Form>
      )}
    </Formik>
  );
};
