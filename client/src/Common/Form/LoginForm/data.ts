import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Неверный email').required('Обязательное поле'),
  password: Yup.string()
    .min(8, 'Минимум 8 букв')
    .max(12, 'Максимум 12 букв')
    .required('Обязательное поле'),
  remember: Yup.bool(),
});
export const initialValues = {
  email: '',
  password: '',
  remember: false,
};
