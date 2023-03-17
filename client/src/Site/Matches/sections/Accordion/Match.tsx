import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "../../styles";
import { Link } from "../../../../Common/Link";
import { Matches } from "../../types";

interface MatchProps {
  game: Matches;
}

export const Match: FC<MatchProps> = React.memo(
  ({
    game: { id, competition, season, homeTeam, awayTeam, referees },
  }: MatchProps): JSX.Element => {
    const referee = !!referees?.length;
    return (
      <Box sx={styles.match} key={id}>
        <Box sx={styles.accordionRoot}>
          <Typography sx={[styles.font, { fontSize: "20px" }]}>
            Тур {season.currentMatchday}
          </Typography>

          <img
            style={{
              width: "40px",
              height: "40px",
              marginLeft: "8px",
            }}
            src={competition.emblem}
          />
        </Box>

        <Box>
          <Box sx={[styles.refereeBox, { marginTop: "10px" }]}>
            <Link slug={homeTeam.id}>
              <Typography
                sx={[styles.font, { ":hover": { color: "darkseagreen" } }]}
              >
                <img style={styles.emblem} src={homeTeam.crest} />
                {homeTeam.shortName} :
              </Typography>
            </Link>
            <Link slug={awayTeam.id}>
              <Typography
                sx={[
                  styles.font,
                  {
                    marginLeft: "8px",
                    ":hover": { color: "#d28188" },
                  },
                ]}
              >
                {awayTeam.shortName}
                <img style={styles.emblem} src={awayTeam.crest} />
              </Typography>
            </Link>
          </Box>
          {referee && (
            <Box sx={[styles.refereeBox, { marginTop: "10px" }]}>
              <img
                style={{ width: "20px", height: "20px" }}
                src="/images/referee.png"
              />
              <Typography sx={styles.refereeTitle}>
                {referees[0]?.name}
              </Typography>
              <Typography sx={styles.refereeTitle}>
                {referees[0]?.nationality}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
);
