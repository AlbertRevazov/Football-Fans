import React, { FC } from "react";
import { Layout } from "../../src/Components/Layout";
import { Auth } from "../../src/Components/Auth";
import { GuestRouter } from "../../src/utils/PrivateRouter";

const AuthPage: FC = () => {
  return (
    <Layout>
      {/* <GuestRouter> */}
        <Auth />
      {/* </GuestRouter> */}
    </Layout>
  );
};

export default AuthPage;
