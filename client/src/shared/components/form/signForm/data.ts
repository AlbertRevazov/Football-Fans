import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().max(50, 'Максимум 50 букв').required('Поле не заполнено'),
  lastName: Yup.string().max(50, 'Максимум 50 букв').required('Поле не заполнено'),
  phone: Yup.string().max(50, 'Максимум 50 букв').required('Поле не заполнено'),
  email: Yup.string().email('Неверный email').required('Поле не заполнено'),
  password: Yup.string()
    .min(8, 'Минимум 8 букв')
    .max(12, 'Максимум 12 букв')
    .required('Поле не заполнено'),
});

export const initialValues = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
};
