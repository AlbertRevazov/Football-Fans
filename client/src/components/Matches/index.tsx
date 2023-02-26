import { Box } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { getMatches } from "../../redux/features/matches/matchesSlice";
import { useMatchesHook } from "./hooks";
import { MatchesAccordion } from "./sections/Accordion/MatchesAccordion";
import { styles } from "./styles";

export const MatchesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useMatchesHook();

  useEffect(() => {
    dispatch(getMatches());
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Box sx={styles.loading}>
          <img
            style={{ width: "300px", height: "300px" }}
            src="/gif/loading.gif"
          />
        </Box>
      ) : (
        <Box sx={{ margin: "150px" }}>
          <MatchesAccordion />
        </Box>
      )}
    </Box>
  );
};
