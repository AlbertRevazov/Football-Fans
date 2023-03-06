import { Box, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Info } from "./LK/Edit/Info";
import { Photo } from "./LK/Edit/Photo";

export const UserPage: FC = () => {
  const { user } = useAppSelector((s) => s.users);

  useEffect(() => {}, [user?.image]);

  return (
    <Typography> Раздел в разработке</Typography>
    // <Box
    //   sx={{
    //     minHeight: "650px",
    //     display: "flex",
    //     justifyContent: "space-around",
    //     alignItems: "center",
    //   }}
    // >
    //   <Box>
    //     <Info />
    //   </Box>
    //   <Box>
    //     <Photo />
    //   </Box>
    // </Box>
  );
};
