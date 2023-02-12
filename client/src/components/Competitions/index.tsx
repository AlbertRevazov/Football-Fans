import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getScorersCompetition,
  getTableCompetition,
} from "../../redux/features/competitions/competitionsSlice";
import { CompetitionTable } from "./sections/Table/CompetitionTable";
import { Box, Button } from "@mui/material";
import { ScorersPage } from "./sections/Scorers";
import { styles } from "./styles";
import Typography from "@mui/material/Typography";
import { errorsData } from "../../utils/constants";
import { useRouter } from "next/router";

export const CompetitionPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [scorers, setScorers] = useState(false);
  const { isLoading, errorsMessage } = useAppSelector(
    (state) => state.competitions
  );
  const dispatch = useAppDispatch();
  const data = useAppSelector(
    (state) => state?.competitions.tournament?.standings
  );

  useEffect(() => {
    if (id) {
      scorers
        ? dispatch(getScorersCompetition(id))
        : dispatch(getTableCompetition(id));
    }
  }, [id, scorers]);

  return (
    <>
      {!!errorsMessage ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alighItems: "center",
            margin: "60px",
          }}
        >
          <Typography sx={styles.error}>
            {errorsData[`${errorsMessage}`]}
          </Typography>
        </Box>
      ) : (
        <Box>
          <Box sx={styles.buttonsBox}>
            <Button
              variant="text"
              disabled={!scorers}
              onClick={() => setScorers(false)}
              sx={[styles.darkTableCell, styles.buttonsTable]}
            >
              Турнирная Таблица
            </Button>
            <Button
              variant="text"
              disabled={scorers}
              onClick={() => setScorers(true)}
              sx={[styles.darkTableCell, styles.buttonsTable]}
            >
              Бомбардиры
            </Button>
          </Box>
          {isLoading ? (
            <Box sx={styles.loading}>
              <img
                style={{ width: "300px", height: "300px" }}
                src="/gif/loading.gif"
              />
            </Box>
          ) : !scorers ? (
            <CompetitionTable data={data} />
          ) : (
            <ScorersPage />
          )}
        </Box>
      )}
    </>
  );
};
