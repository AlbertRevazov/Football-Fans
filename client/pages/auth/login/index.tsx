import React, { FC } from 'react'
import Layout from '../../../src/shared/ui/layout'
import Form from '../../../src/shared/components/form'

const LoginPage: FC = () => {
  return (
    <Layout>
      <div
        style={{
          maxWidth: '1057px',
          margin: '0 auto',
          minHeight: '650px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Form />
      </div>
    </Layout>
  )
}

export default LoginPage
