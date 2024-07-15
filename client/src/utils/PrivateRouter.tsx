import React, { FC, ReactNode } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import { Loader } from '@/Common/Loading';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const AuthUsersRouter: FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const { user, isLoading } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    router.push('/auth');
    return null;
  }

  return <>{children}</>;
};

export const GuestRouter: FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const { user, isLoading } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return <Loader />;
  }

  if (user) {
    router.push('/');
    return null;
  }

  return <>{children}</>;
};

export const AdminRouter: FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const { user, isLoading } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return <Loader />;
  }

  if (!user || user.role !== 'admin') {
    router.push('/auth');
    return null;
  }

  return <>{children}</>;
};
