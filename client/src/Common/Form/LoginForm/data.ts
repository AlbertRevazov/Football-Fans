import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Неверный email').required('Поле не заполнено'),
  password: Yup.string()
    .min(8, 'Минимум 8 букв')
    .max(12, 'Максимум 12 букв')
    .required('Поле не заполнено'),
  remember: Yup.bool(),
});
export const initialValues = {
  email: '',
  password: '',
  remember: false,
};
