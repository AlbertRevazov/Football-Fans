import React from "react";
import { MainPage } from "../src/components/Main";
import { Layout } from "../src/components/Layout";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Layout>
        <MainPage />
      </Layout>
    </>
  );
};
export default Index;
