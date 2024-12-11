import React, { FC, useState } from 'react';
import { initialValues, validationSchema } from './data';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Form, Formik } from 'formik';
import { getUserSign } from '@/redux/slices/Auth';
import { useRouter } from 'next/router';
import Label from '../../../common/Label';
import Button from '@/common/CButton';
import styles from '../Form.module.scss';

const SignFormSection: FC = () => {
  const { message } = useAppSelector((s) => s.auth);
  const [isPass, setIsPass] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(getUserSign(values));
          setSubmitting(false);
          router.push('/auth/login');
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          {!!message && <div style={{ color: 'red' }}> {message}</div>}
          <Label title="name" type="text" />
          <Label title="lastName" type="text" />
          <Label title="phone" type="text" />
          <Label title="email" type="email" />
          <Label title="password" type={isPass ? 'text' : 'password'}>
            <img
              src={isPass ? '/img/show.png' : '/img/hide.png'}
              alt="password img"
              loading="lazy"
              onClick={() => setIsPass(!isPass)}
            />
          </Label>
          <Button title="Создать" type="submit" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};
export default SignFormSection;
