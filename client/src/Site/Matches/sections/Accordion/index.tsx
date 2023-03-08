import React, { FC } from "react";
import { Accordion, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useMatchesHook } from "../../hooks";
import { Matches } from "../../../../types";
import { useAppSelector } from "../../../../hooks/hooks";
import { styles } from "../../styles";
import Link from "next/link";
import { Error } from "../../../../Common/Error";

export const MatchesAccordion: FC = () => {
  const { competionsTodayNames, competitionsNames } = useMatchesHook();
  const { games, errorMessage } = useAppSelector((state) => state.matches);

  return (
    <>
      {!!errorMessage ? (
        <Error errorMessage={errorMessage} />
      ) : (
        competitionsNames.map((item: string, index) => {
          return (
            <Box sx={{ background: "none", backdropFilter: "blur(19px)" }}>
              <Accordion
                sx={{
                  margin: "15px",
                  borderRadius: "8px",
                  background: "none",
                }}
                key={index}
              >
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
                      <Box key={game.id}>
                        {item === game?.competition?.name && (
                          <Box sx={styles.match} key={game.id}>
                            <Box sx={styles.accordionRoot}>
                              <Typography
                                sx={[styles.font, { fontSize: "20px" }]}
                              >
                                Тур {game.season.currentMatchday}
                              </Typography>

                              <img
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  marginLeft: "8px",
                                }}
                                src={game.competition.emblem}
                              />
                            </Box>

                            <Box>
                              <Box
                                sx={[styles.refereeBox, { marginTop: "10px" }]}
                              >
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
                                    {game.homeTeam.shortName} :
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
                                        marginLeft: "8px",
                                        ":hover": { color: "#d28188" },
                                      },
                                    ]}
                                  >
                                    {game.awayTeam.shortName}
                                    <img
                                      style={styles.emblem}
                                      src={game.awayTeam.crest}
                                    />
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
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/referee.png"
                                  />
                                  <Typography sx={styles.refereeTitle}>
                                    {game.referees[0]?.name}
                                  </Typography>
                                  <Typography sx={styles.refereeTitle}>
                                    {game.referees[0]?.nationality}
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
            </Box>
          );
        })
      )}
    </>
  );
};
