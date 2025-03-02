import React, { FC, useEffect, useState } from 'react'
import { initialValues, validationSchema } from './data'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useRouter } from 'next/router'
import { getUserLogin } from '@/redux/Slices/Auth'
import { ErrorMessage, Form, Formik } from 'formik'
import Label from '@/shared/ui/label'
import styles from '../form.module.scss'
import Button from '@/shared/ui/button'

const LoginFormSection: FC = () => {
  const { status, message } = useAppSelector(s => s.auth)
  const [isPass, setIsPass] = useState<boolean>(false)
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === '200') {
      router.push('/')
    }
  }, [status, router])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(getUserLogin(values))
          setSubmitting(false)
          router.push('/')
        }, 400)
      }}>
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
          <ErrorMessage component="div" name="remember" className={styles.invalid} />
          <Button type="submit" disabled={isSubmitting} title="Войти" />
        </Form>
      )}
    </Formik>
  )
}
export default LoginFormSection
