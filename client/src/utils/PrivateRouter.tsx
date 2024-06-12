import React, { FC, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/redux/hooks'

interface ProtectedRouteProps {
	children: ReactNode
}

export const AuthUsersRouter: FC<ProtectedRouteProps> = React.memo(
	({ children }) => {
		const router = useRouter()
		const { user, isLoading } = useAppSelector(state => state.auth)

		if (isLoading) {
			return <h3>Loading...</h3>
		}

		if (!user) {
			router.push('/auth') // Предполагаем, что '/login' - это страница аутентификации
			return null
		}

		return <>{children}</>
	}
)
export const GuestRouter: FC<ProtectedRouteProps> = React.memo(
	({ children }) => {
		const router = useRouter()
		const { user, isLoading } = useAppSelector(state => state.auth)

		if (isLoading) {
			return <h3>Loading...</h3>
		}

		if (user) {
			router.push('/') // Предполагаем, что '/' - это главная страница
			return null
		}

		return <>{children}</>
	}
)

export const AdminRouter: FC<ProtectedRouteProps> = React.memo(
	({ children }) => {
		const router = useRouter()
		const { user, isLoading } = useAppSelector(s => s.auth)

		if (isLoading) {
			return <h3>Loading...</h3>
		}

		if (!user || user.role !== 'admin') {
			router.push('/auth')
			return null
		}

		return <>{children}</>
	}
)
