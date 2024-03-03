import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
import { useFormHook } from "./hooks";
import { Label } from "../Label";
import { useAppDispatch } from "@/redux/hooks";
import { getUserLogin, getUserSign } from "@/redux/Auth/UsersSlice";

interface IFormProps {
  isSign: boolean;
}

export const AuthForm: FC<IFormProps> = ({ isSign }) => {
  const { initialValuesSign, initialValuesLogin, validationSchema } =
    useFormHook(isSign);
  const [isPass, setIsPass] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={isSign ? initialValuesSign : initialValuesLogin}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch(isSign ? getUserSign(values) : getUserLogin(values));

          setSubmitting(false);
        }, 400);
        router.push("/");
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            {isSign && (
              <>
                <Label title="name" type="text" />
                <Label title="lastName" type="text" />
                <Label title="phone" type="text" />
              </>
            )}

            <Label title="email" type="email" />
            <Label title="password" type={isPass ? "text" : "password"} />
          </div>
          <Field name="button" type="submit" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};
