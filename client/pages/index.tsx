import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Layout } from "../src/Components/Layout";
import { getMe } from "../src/redux/features/AuthSlice";
import { useAppDispatch, useAppSelector } from "../src/redux/hooks";
import { Main } from "../src/Components/Main";

const Index = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  useEffect(() => {
    dispatch(getMe());
  }, []);

  const { user } = useAppSelector((state) => state.auth);
  return (
    <Layout>
      {user?.email ? (
        <Main />
      ) : (
        <span onClick={() => router.push("/auth")}>
          Необходимо авторизоваться
        </span>
      )}
    </Layout>
  );
};

export default Index;
