import React, { FC } from "react";
import { Layout } from "../../src/Components/Layout";
import { Auth } from "../../src/Components/Auth";
import { PrivateRouter } from "../../src/utils/PrivateRouter";

const AuthPage: FC = () => {
  return (
    <Layout>
      <PrivateRouter>
        <Auth />
      </PrivateRouter>
    </Layout>
  );
};

export default AuthPage;
