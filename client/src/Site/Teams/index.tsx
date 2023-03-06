import useMediaQuery from "@mui/material/useMediaQuery";
import { TeamDesktop } from "./sections/TeamDesktop";
import { MobileTeamsPage } from "./sections/Mobile";

export const TeamsPage: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return isMobile ? <MobileTeamsPage /> : <TeamDesktop />;
};
