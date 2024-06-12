import React, { FC, useEffect, useState } from 'react'
import { useSignFormHook } from './hooks'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Field, Form, Formik } from 'formik'
import { getUserSign } from '@/redux/Slices/Auth'
import { useRouter } from 'next/router'
import { Label } from '../../Label'
import styles from '../Form.module.scss'

export const Sign: FC = () => {
	const { initialValues, validationSchema } = useSignFormHook()
	const { status, message } = useAppSelector(s => s.auth)
	const [isPass, setIsPass] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const router = useRouter()

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
					dispatch(getUserSign(values))
					setSubmitting(false)
				}, 400)
			}}
		>
			{({ isSubmitting }) => (
				<Form className={styles.form}>
					{!!message && <div style={{ color: 'red' }}> {message}</div>}
					<Label title='name' type='text' />
					<Label title='lastName' type='text' />
					<Label title='phone' type='text' />
					<Label title='email' type='email' />
					<Label title='password' type={isPass ? 'text' : 'password'} />
					<Field
						name='button'
						type='submit'
						disabled={isSubmitting}
						className={styles.btn}
					/>
				</Form>
			)}
		</Formik>
	)
}
