import React, { FC, useState } from "react";
import { useSignFormHook } from "./hooks";
import { useAppDispatch } from "@/redux/hooks";
import { Field, Form, Formik } from "formik";
import { getUserSign } from "@/redux/features/AuthSlice";
import { useRouter } from "next/router";
import { Label } from "../../Label";
import styles from "../AuthForm.module.scss";

export const Sign: FC = () => {
  const { initialValues, validationSchema } = useSignFormHook();
  const [isPass, setIsPass] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(getUserSign(values));
          setSubmitting(false);
        }, 400);
        router.push("/");
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <Label title="name" type="text" />
          <Label title="lastName" type="text" />
          <Label title="phone" type="text" />
          <Label title="email" type="email" />
          <Label title="password" type={isPass ? "text" : "password"} />

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
