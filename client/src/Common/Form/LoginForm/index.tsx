import React, { FC, useState } from "react";
import { useLoginFormHook } from "./hooks";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/router";
import { getUserLogin } from "@/redux/features/AuthSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Label } from "../../Label";
import styles from "../Form.module.scss";

export const Login: FC = () => {
  const { initialValues, validationSchema } = useLoginFormHook();
  const [isPass, setIsPass] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(getUserLogin(values));
          setSubmitting(false);
        }, 400);
        router.push("/");
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <Label title="email" type="email" />
          <Label title="password" type={isPass ? "text" : "password"} />

          <label htmlFor="remember" className={styles.checkbox_label}>
            <Field
              type="checkbox"
              name="remember"
              className={styles.checkbox}
            />
            <span className={styles.fe}></span>
            Запомнить меня
          </label>
          <ErrorMessage
            component="div"
            name="remember"
            className={styles.invalid}
          />

          <Field
            name="button"
            type="submit"
            disabled={isSubmitting}
            className={styles.btn}
          />
        </Form>
      )}
    </Formik>
  );
};
