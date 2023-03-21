import { FC, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getScorersCompetition,
  getTableCompetition,
} from "../../redux/features/competitions/competitionsSlice";
import { CompetitionTable } from "./sections/Table/CountryLeague/CompetitionTable";
import { Box, Button } from "@mui/material";
import { ScorersPage } from "./sections/Scorers";
import { styles } from "./styles";
import { Cleague } from "./sections/Table/ChampionsLeague/Cleague";
import { Error } from "../../Common/Error";
import { Loading } from "../../Common/Loading";
import React from "react";

interface CompetitionPageProps {}

export const CompetitionPage: FC<CompetitionPageProps> = React.memo(() => {
  const dispatch = useAppDispatch();
  const { id } = useRouter().query;

  const [scorers, setScorers] = useState(false);
  const toggleScorers = useCallback(() => {
    setScorers((prevState) => !prevState);
  }, []);

  const { isLoading, errorMessage, tournament } = useAppSelector(
    (state) => state.competitions
  );

  const data = tournament?.standings;

  useEffect(() => {
    if (id) {
      scorers
        ? dispatch(getScorersCompetition(id))
        : dispatch(getTableCompetition(id));
    }
  }, [id, scorers, dispatch]);

  if (errorMessage) {
    return <Error errorMessage={errorMessage} />;
  }

  return (
    <Box>
      <Box sx={styles.buttonsBox}>
        <Button
          variant="text"
          disabled={!scorers}
          onClick={toggleScorers}
          sx={[styles.darkTableCell, styles.buttonsTable]}
          color="primary"
        >
          Турнирная Таблица
        </Button>
        <Button
          variant="text"
          disabled={scorers}
          onClick={toggleScorers}
          sx={[styles.darkTableCell, styles.buttonsTable]}
          color="primary"
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
  );
});
