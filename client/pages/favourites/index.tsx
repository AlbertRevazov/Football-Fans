import React, { FC } from "react";
import { FavouritePage } from "../../src/Site/Favourites";
import { Layout } from "../../src/Site/Layout";

const Index: FC = () => {
  return (
    <>
      <Layout>
        <FavouritePage />
      </Layout>
    </>
  );
};
export default Index;
