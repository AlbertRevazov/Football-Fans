import React, { FC } from "react";
import { useEffect, useState } from "react";
import { Container, Box, Button } from "@mui/material";
import { AboutTeam } from "./sections/about";
import { ContactDetails } from "./sections/contact";
import { Squad } from "./sections/squad/Index";
import { useRouter } from "next/dist/client/router";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  getCalendar,
  getTeams,
} from "../../../redux/features/teams/teamsSlice";
import { Error } from "../../../Common/Error";
import { Loading } from "../../../Common/Loading";
import { styles } from "../styles";
import { Calendar } from "../../../Common/Calendar";

export const TeamDesktop: FC = () => {
  const dispatch = useAppDispatch();
  const [toogle, setToogle] = useState(true);
  const { club, errorMessage, isLoading } = useAppSelector(
    (state) => state.teams
  );
  const { id } = useRouter().query;
  console.log(id, "sda");

  useEffect(() => {
    if (id) {
      dispatch(getTeams(id));
      dispatch(getCalendar(id));
    }
  }, [id]);
  return (
    <>
      {!!errorMessage ? (
        <Error errorMessage={errorMessage} />
      ) : toogle ? (
        isLoading ? (
          <Loading />
        ) : (
          <Container>
            <Box sx={styles.buttonWrapper}>
              <Button disabled>Информация</Button>
              <Button sx={styles.button} onClick={() => setToogle(!toogle)}>
                Календарь
              </Button>
            </Box>

            {club && (
              <Box sx={styles.root}>
                <Box sx={styles.content}>
                  {club && <AboutTeam data={club} />}
                  {club && <ContactDetails data={club} />}
                </Box>
                {club && <Squad data={club} />}
              </Box>
            )}
          </Container>
        )
      ) : (
        <Box>
          <Box sx={styles.buttonWrapper}>
            <Button sx={styles.button} onClick={() => setToogle(!toogle)}>
              Информация
            </Button>
            <Button disabled>Календарь</Button>
          </Box>
          <Calendar />
        </Box>
      )}
    </>
  );
};
