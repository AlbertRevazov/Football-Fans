import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().max(50, 'Максимум 50 букв').required('Обязательное поле'),
  lastName: Yup.string().max(50, 'Максимум 50 букв').required('Обязательное поле'),
  phone: Yup.string().max(50, 'Максимум 50 букв').required('Обязательное поле'),
  email: Yup.string().email('Неверный email').required('Обязательное поле'),
  password: Yup.string()
    .min(8, 'Минимум 8 букв')
    .max(12, 'Максимум 12 букв')
    .required('Обязательное поле'),
});

export const initialValues = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
};
