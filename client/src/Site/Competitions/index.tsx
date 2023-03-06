import { useEffect, FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getScorersCompetition,
  getTableCompetition,
} from "../../redux/features/competitions/competitionsSlice";
import { CompetitionTable } from "./sections/Table/CompetitionTable";
import { Box, Button } from "@mui/material";
import { ScorersPage } from "./sections/Scorers";
import { styles } from "./styles";
import { useRouter } from "next/router";
import { Cleague } from "./sections/Table/Cleague";
import { Error } from "../../Common/Error";
import { Loading } from "../../Common/Loading";

export const CompetitionPage: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = router.query;
  const [scorers, setScorers] = useState(false);

  const { isLoading, errorsMessage } = useAppSelector(
    (state) => state.competitions
  );
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
        <Error errorMessage={errorsMessage} />
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
            <Loading />
          ) : !scorers ? (
            id === "CL" ? (
              <Cleague data={data} />
            ) : (
              <CompetitionTable data={data} />
            )
          ) : (
            <ScorersPage />
          )}
        </Box>
      )}
    </>
  );
};
