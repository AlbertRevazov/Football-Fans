import * as Yup from "yup";

type useFormHookReturn = {
  validationSchema: Yup.ObjectSchema<
    {
      name: string | undefined;
      email: string;
      password: string;
    },
    Yup.AnyObject,
    {
      name: undefined;
      email: undefined;
      password: undefined;
    },
    ""
  >;
  initialValuesSign: {
    name: string;
    email: string;
    password: string;
  };
  initialValuesLogin: {
    email: string;
    password: string;
  };
};

export const useFormHook = (isSign: boolean): useFormHookReturn => {
  const validationSchema = Yup.object().shape({
    name: isSign
      ? Yup.string().max(50, "Максимум 50 букв").required("Обязательное поле")
      : Yup.string().max(50, "Максимум 50 букв"),
    lastName: isSign
      ? Yup.string().max(50, "Максимум 50 букв").required("Обязательное поле")
      : Yup.string().max(50, "Максимум 50 букв"),
    phone: isSign
      ? Yup.string().max(50, "Максимум 50 букв").required("Обязательное поле")
      : Yup.string().max(50, "Максимум 50 букв"),

    email: Yup.string().email("Неверный email").required("Обязательное поле"),

    password: Yup.string()
      .min(8, "Минимум 8 букв")
      .max(12, "Максимум 12 букв")
      .required("Обязательное поле"),
  });

  const initialValuesSign = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  };

  const initialValuesLogin = {
    email: "",
    password: "",
  };

  return { validationSchema, initialValuesSign, initialValuesLogin };
};
