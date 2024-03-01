import React, { FC } from "react";
import { Layout } from "../../src/Layout/Layout";
import { NotFound } from "../../src/Components/404";

const NotFoundPage: FC = () => {
  return (
    <>
      <Layout>
        <NotFound />
      </Layout>
    </>
  );
};
export default NotFoundPage;
