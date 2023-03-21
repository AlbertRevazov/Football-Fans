import { Box } from "@mui/material";
import React, { FC } from "react";
import { FavouritePage } from "../../src/Site/Favourites";
import { Layout } from "../../src/Site/Layout";

const Index: FC = () => {
  return (
    <Box
      sx={{
        background: "url('/images/favourite.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "sticky",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Layout>
        <FavouritePage />
      </Layout>
    </Box>
  );
};
export default Index;
