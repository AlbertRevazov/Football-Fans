import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import { Matches } from "../../../../types";
import { useMatchesHook } from "../../hooks";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { styles } from "./styles";
import { Error } from "../../../../Common/Error";

export const MobileAccordion: FC = () => {
  const { competionsTodayNames, competitionsNames } = useMatchesHook();
  const { games, errorMessage } = useAppSelector((state) => state.matches);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px",
        position: "relative",

        // justifyContent: "",
      }}
    >
      {!!errorMessage ? (
        <Error errorMessage={errorMessage} />
      ) : (
        competitionsNames.map((item: string, index) => {
          return (
            <>
              <Accordion sx={styles.accordion} key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
                >
                  <Typography sx={styles.font}>
                    <img
                      src={competionsTodayNames[item]}
                      style={styles.emblem}
                    />
                    {item}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {games?.map((game: Matches) => {
                    return (
                      <Box sx={{ width: "100%" }} key={game.id}>
                        {item === game?.competition?.name && (
                          <Box sx={styles.match} key={game.id}>
                            <Box sx={{ margin: "20px 0 20px 0" }}>
                              <Box>
                                <Link
                                  style={styles.nextLink}
                                  href={{
                                    pathname: "/teams/[slug]",
                                    query: { slug: `${game.homeTeam.id}` },
                                  }}
                                >
                                  <Typography
                                    sx={[
                                      styles.font,
                                      { ":hover": { color: "darkseagreen" } },
                                    ]}
                                  >
                                    <img
                                      style={styles.emblem}
                                      src={game.homeTeam.crest}
                                    />
                                    {game.homeTeam.shortName}
                                  </Typography>
                                </Link>
                                <Link
                                  style={styles.nextLink}
                                  href={{
                                    pathname: "/teams/[slug]",
                                    query: { slug: `${game.awayTeam.id}` },
                                  }}
                                >
                                  <Typography
                                    sx={[
                                      styles.font,
                                      {
                                        ":hover": { color: "#d28188" },
                                      },
                                    ]}
                                  >
                                    <img
                                      style={styles.emblem}
                                      src={game.awayTeam.crest}
                                    />
                                    {game.awayTeam.shortName}
                                  </Typography>
                                </Link>
                              </Box>
                              {!!game.referees.length && (
                                <Box
                                  sx={[
                                    styles.refereeBox,
                                    { marginTop: "10px" },
                                  ]}
                                >
                                  <img
                                    style={styles.emblem}
                                    src="/images/referee.png"
                                  />
                                  <Typography sx={styles.refereeTitle}>
                                    {game.referees[0]?.name}
                                  </Typography>
                                </Box>
                              )}
                            </Box>
                          </Box>
                        )}
                      </Box>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            </>
          );
        })
      )}
    </Box>
  );
};
