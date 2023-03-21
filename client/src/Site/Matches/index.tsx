import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, FC } from "react";
import { Loading } from "../../Common/Loading";
import { useAppDispatch } from "../../hooks/hooks";
import { getMatches } from "../../redux/features/matches/matchesSlice";
import { useMatchesHook } from "./hooks";
import { MatchesAccordion } from "./sections/Accordion";
import { MobileAccordion } from "./sections/mobileAccordion";

export const MatchesPage: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useMatchesHook();
  const isMobile = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    dispatch(getMatches());
  }, [dispatch]);

  return (
    <Box sx={{ minHeight: "800px" }}>
      {isLoading ? (
        <Loading />
      ) : !isMobile ? (
        <Box sx={{ margin: "150px" }}>
          <MatchesAccordion />
        </Box>
      ) : (
        <MobileAccordion />
      )}
    </Box>
  );
};
