import * as Yup from "yup";
type useSignFormHookReturn = {
  validationSchema: Yup.ObjectSchema<
    {
      name: string;
      lastName: string;
      phone: string;
      email: string;
      password: string;
    },
    Yup.AnyObject,
    {
      name: undefined;
      lastName: undefined;
      phone: undefined;
      email: undefined;
      password: undefined;
    },
    ""
  >;
  initialValues: {
    name: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
  };
};
export const useSignFormHook = (): useSignFormHookReturn => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(50, "Максимум 50 букв")
      .required("Обязательное поле"),
    lastName: Yup.string()
      .max(50, "Максимум 50 букв")
      .required("Обязательное поле"),
    phone: Yup.string()
      .max(50, "Максимум 50 букв")
      .required("Обязательное поле"),
    email: Yup.string().email("Неверный email").required("Обязательное поле"),
    password: Yup.string()
      .min(8, "Минимум 8 букв")
      .max(12, "Максимум 12 букв")
      .required("Обязательное поле"),
  });
  const initialValues = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  };
  return { validationSchema, initialValues };
};
