import React, { FC, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

interface IRouterProps {
  children: ReactNode;
}

export const PrivateAuthRouter: FC<IRouterProps> = React.memo(
  ({ children }) => {
    const router = useRouter();
    const { user, isLoading } = useAppSelector((s) => s.auth);
    const isLoad = isLoading ? <h3>Loading...</h3> : children;

    return user ? (
      isLoad
    ) : (
      <span onClick={() => router.push("/auth")}>
        Необходимо авторизоваться
      </span>
    );
  }
);

export const PrivateRouter: FC<IRouterProps> = React.memo(({ children }) => {
  const router = useRouter();
  const { user, isLoading } = useAppSelector((s) => s.auth);
  const isLoad = isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <span onClick={() => router.push("/")}>Страница недоступна</span>
  );

  return user ? isLoad : children;
});

export const AdminRouter: FC<IRouterProps> = React.memo(({ children }) => {
  const router = useRouter();
  const { user, isLoading } = useAppSelector((s) => s.auth);
  const isLoad = isLoading ? <h3>Loading...</h3> : children;

  return user?.role === "admin" ? (
    isLoad
  ) : (
    <span onClick={() => router.push("/auth")}>У вас нет доступа</span>
  );
});
