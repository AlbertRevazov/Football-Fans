import React from "react";
import { useMediaQuery, Typography } from "@mui/material";
import { MobileTeamsPage } from "./Mobile";
import { useAppSelector } from "../../hooks/hooks";
import { checkIsAuth } from "../../redux/features/auth/authSlice";
import { TeamDesktop } from "./TeamDesktop";

export const TeamsPage: React.FC = React.memo(() => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const isAuth = useAppSelector((state) => checkIsAuth(state));

  return (
    <>
      {isAuth ? (
        isMobile ? (
          <MobileTeamsPage />
        ) : (
          <TeamDesktop />
        )
      ) : (
        <Typography>Авторизуйтесь</Typography>
      )}
    </>
  );
});
