import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import { TeamDesktop } from "./sections/TeamDesktop";
import { MobileTeamsPage } from "./sections/Mobile";
import { useAppSelector } from "../../hooks/hooks";
import { checkIsAuth } from "../../redux/features/auth/authSlice";

export const TeamsPage: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const isAuth = useAppSelector(checkIsAuth);

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
};
