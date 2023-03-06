import React, { FC } from "react";
import { useTeamsHook } from "../../hooks";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../hooks/hooks";
import {
  getCalendar,
  getTeams,
} from "../../../../redux/features/teams/teamsSlice";
import { Container, Box, Button } from "@mui/material";
import { Loading } from "../../../../Common/Loading";
import { styles } from "../../styles";
import { AboutTeam } from "../about";
import { Calendar } from "../calendar";
import { ContactDetails } from "../contact";
import { Squad } from "../squad/Index";
import { Error } from "../../../../Common/Error";

export const TeamDesktop: FC = () => {
  const dispatch = useAppDispatch();
  const [toogle, setToogle] = useState(true);

  const {
    aboutData,
    contactData,
    errorMessage,
    id,
    squadData,
    club,
    isLoading,
  } = useTeamsHook();

  useEffect(() => {
    if (!!id) {
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
                  {aboutData && <AboutTeam data={aboutData} />}
                  {contactData && <ContactDetails data={contactData} />}
                </Box>
                {squadData && <Squad data={squadData} />}
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
