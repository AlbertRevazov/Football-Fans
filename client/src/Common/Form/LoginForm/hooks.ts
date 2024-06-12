import * as Yup from 'yup'

type useLoginHookReturn = {
	validationSchema: Yup.ObjectSchema<
		{
			email: string
			password: string
		},
		Yup.AnyObject,
		{
			email: undefined
			password: undefined
		},
		''
	>
	initialValues: {
		email: string
		password: string
		remember: boolean
	}
}

export const useLoginFormHook = (): useLoginHookReturn => {
	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Неверный email').required('Обязательное поле'),
		password: Yup.string()
			.min(8, 'Минимум 8 букв')
			.max(12, 'Максимум 12 букв')
			.required('Обязательное поле'),
		remember: Yup.bool(),
	})
	const initialValues = {
		email: '',
		password: '',
		remember: false,
	}

	return { initialValues, validationSchema }
}
