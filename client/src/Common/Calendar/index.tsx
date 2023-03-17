import { Box, Container, Divider, Typography } from "@mui/material";
import React, { FC } from "react";
import { useCalendarHook } from "./hooks";
import { styles } from "./styles";

interface CalendarProps {}

export const Calendar: FC<CalendarProps> = React.memo(() => {
  const { calendar, matchDate } = useCalendarHook();
  return (
    <Container>
      <Box sx={styles.root}>
        <Box sx={styles.container}>
          <Box sx={{ width: "100%" }}>
            {calendar?.matches.map((match) => (
              <Container key={match.id}>
                <Box sx={{ display: "flex", justifyContent: "start" }}>
                  <Box sx={styles.calendarWrapper}>
                    <Typography sx={[styles.font, { width: "160px" }]}>
                      {matchDate(match.utcDate).date}
                    </Typography>
                    <Typography sx={styles.competitionTitle}>
                      {match.competition.name}
                    </Typography>
                  </Box>
                  <Box sx={styles.matchDayTitle}>
                    <Typography>Тур {match.matchday}</Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                      }}
                    >
                      <Typography sx={[styles.font, { margin: "0 4px 0 4px" }]}>
                        {match.homeTeam.name}
                      </Typography>

                      <Typography sx={styles.font}>
                        {match.score.fullTime.home >= 0
                          ? match.score.fullTime.home
                          : null}
                      </Typography>
                      <Typography sx={{ margin: "4px" }}>-</Typography>
                      <Typography sx={styles.font}>
                        {match.score.fullTime.away >= 0
                          ? match.score.fullTime.away
                          : null}
                      </Typography>

                      <Typography sx={[styles.font, { margin: "0 4px 0 4px" }]}>
                        {match.awayTeam.name}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ marginTop: "5px" }} />
              </Container>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
});
