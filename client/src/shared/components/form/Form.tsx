import React, { FC } from 'react'
import Sign from './sign'
import Login from './login'

interface IAuthFormProps {
  isSign?: boolean
}

const AuthForm: FC<IAuthFormProps> = ({ isSign = false }) => {
  return isSign ? <Sign /> : <Login />
}

export default AuthForm
