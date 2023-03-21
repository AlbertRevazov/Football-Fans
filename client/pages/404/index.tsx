import React, { FC } from "react";
import { Layout } from "../../src/Site/Layout";
import { NotFound } from "../../src/Site/404";

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
