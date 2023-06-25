import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "../../../../Common/Link";
import { Matches } from "../../../../types";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./MatchAccordion.module.scss";

interface MatchProps {
  game: Matches;
}

export const Match: FC<MatchProps> = React.memo(
  ({
    game: { id, competition, season, homeTeam, awayTeam, referees },
  }: MatchProps): JSX.Element => {
    const referee = !!referees?.length;
    return (
      <Box className={styles.match} key={id}>
        <Box className={styles.accordionRoot}>
          <Typography className={isMobile ? styles.fontMobile : styles.font}>
            Тур {season.currentMatchday}
          </Typography>

          <img className={styles.image} src={competition.emblem} />
        </Box>

        <Box>
          <Box className={styles.refereeBox}>
            <Link slug={homeTeam.id}>
              <Typography className={styles.hometeam}>
                <img className={styles.emblem} src={homeTeam.crest} />
                {homeTeam.shortName} :
              </Typography>
            </Link>
            <Link slug={awayTeam.id}>
              <Typography className={styles.awayteam}>
                {awayTeam.shortName}
                <img className={styles.emblem} src={awayTeam.crest} />
              </Typography>
            </Link>
          </Box>
          {referee && (
            <Box className={styles.refereeBox} sx={{ marginTop: "10px" }}>
              <img
                style={{ width: "20px", height: "20px" }}
                src="/images/referee.png"
              />
              <Typography className={styles.refereeTitle}>
                {referees[0]?.name}
              </Typography>
              <Typography className={styles.refereeTitle}>
                {referees[0]?.nationality}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    );
  }
);
